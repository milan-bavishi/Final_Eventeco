import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Avtor from '../../../Assets/Images/Avtor.png'
import '../stylesheets/Profile.css'

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operation/authApi"


export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))
  if (!user) return null


  return (
    <button className="dashNavBtn" onClick={() => setOpen(!open)}>
      <div className="dashNavProfile">
        Hey,{user.firstName}
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {
        open && (
          <div onClick={(e) => e.stopPropagation()} ref={ref} className="DropDownContainer_22" >
            <div onClick={() => { dispatch(logout(navigate)); setOpen(false); }} className="linkAtDropDown_22" >
              <VscSignOut className="dashNavRightDashImg" />
              Logout
            </div>
          </div>
        )}
    </button>


  )
}
