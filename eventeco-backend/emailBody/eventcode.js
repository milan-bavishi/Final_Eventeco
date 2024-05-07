const otppppTemplate = (otp, eventname, firstname, lastname) => {
	return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html
	  dir="ltr"
	  xmlns="http://www.w3.org/1999/xhtml"
	  xmlns:o="urn:schemas-microsoft-com:office:office"
	  lang="en"
	>
	  <head>
		<meta charset="UTF-8" />
		<meta content="width=device-width, initial-scale=1" name="viewport" />
		<meta name="x-apple-disable-message-reformatting" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta content="telephone=no" name="format-detection" />
		<title>my final mail</title>
		<!--[if (mso 16)]>
		  <style type="text/css">
			a {
			  text-decoration: none;
			}
		  </style>
		<![endif]-->
		<!--[if gte mso 9
		  ]><style>
			sup {
			  font-size: 100% !important;
			}
		  </style><!
		[endif]-->
		<!--[if gte mso 9]>
		  <xml>
			<o:OfficeDocumentSettings>
			  <o:AllowPNG></o:AllowPNG>
			  <o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		  </xml>
		<![endif]-->
		<style type="text/css">
		  .rollover:hover .rollover-first {
			max-height: 0px !important;
			display: none !important;
		  }
		  .rollover:hover .rollover-second {
			max-height: none !important;
			display: block !important;
		  }
		  .rollover span {
			font-size: 0px;
		  }
		  u + .body img ~ div div {
			display: none;
		  }
		  #outlook a {
			padding: 0;
		  }
		  span.MsoHyperlink,
		  span.MsoHyperlinkFollowed {
			color: inherit;
			mso-style-priority: 99;
		  }
		  a.es-button {
			mso-style-priority: 100 !important;
			text-decoration: none !important;
		  }
		  a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		  }
		  .es-desk-hidden {
			display: none;
			float: left;
			overflow: hidden;
			width: 0;
			max-height: 0;
			line-height: 0;
			mso-hide: all;
		  }
		  .es-button-border:hover > a.es-button {
			color: #ffffff !important;
		  }
		  @media only screen and (max-width: 600px) {
			.es-m-p0r {
			  padding-right: 0px !important;
			}
			.es-m-p0l {
			  padding-left: 0px !important;
			}
			*[class="gmail-fix"] {
			  display: none !important;
			}
			p,
			a {
			  line-height: 150% !important;
			}
			h1,
			h1 a {
			  line-height: 120% !important;
			}
			h2,
			h2 a {
			  line-height: 120% !important;
			}
			h3,
			h3 a {
			  line-height: 120% !important;
			}
			h4,
			h4 a {
			  line-height: 120% !important;
			}
			h5,
			h5 a {
			  line-height: 120% !important;
			}
			h6,
			h6 a {
			  line-height: 120% !important;
			}
			h1 {
			  font-size: 36px !important;
			  text-align: left;
			}
			h2 {
			  font-size: 26px !important;
			  text-align: left;
			}
			h3 {
			  font-size: 20px !important;
			  text-align: left;
			}
			h4 {
			  font-size: 24px !important;
			  text-align: left;
			}
			h5 {
			  font-size: 20px !important;
			  text-align: left;
			}
			h6 {
			  font-size: 16px !important;
			  text-align: left;
			}
			.es-header-body h1 a,
			.es-content-body h1 a,
			.es-footer-body h1 a {
			  font-size: 36px !important;
			}
			.es-header-body h2 a,
			.es-content-body h2 a,
			.es-footer-body h2 a {
			  font-size: 26px !important;
			}
			.es-header-body h3 a,
			.es-content-body h3 a,
			.es-footer-body h3 a {
			  font-size: 20px !important;
			}
			.es-header-body h4 a,
			.es-content-body h4 a,
			.es-footer-body h4 a {
			  font-size: 24px !important;
			}
			.es-header-body h5 a,
			.es-content-body h5 a,
			.es-footer-body h5 a {
			  font-size: 20px !important;
			}
			.es-header-body h6 a,
			.es-content-body h6 a,
			.es-footer-body h6 a {
			  font-size: 16px !important;
			}
			.es-menu td a {
			  font-size: 12px !important;
			}
			.es-header-body p,
			.es-header-body a {
			  font-size: 14px !important;
			}
			.es-content-body p,
			.es-content-body a {
			  font-size: 16px !important;
			}
			.es-footer-body p,
			.es-footer-body a {
			  font-size: 14px !important;
			}
			.es-infoblock p,
			.es-infoblock a {
			  font-size: 12px !important;
			}
			.es-m-txt-c,
			.es-m-txt-c h1,
			.es-m-txt-c h2,
			.es-m-txt-c h3,
			.es-m-txt-c h4,
			.es-m-txt-c h5,
			.es-m-txt-c h6 {
			  text-align: center !important;
			}
			.es-m-txt-r,
			.es-m-txt-r h1,
			.es-m-txt-r h2,
			.es-m-txt-r h3,
			.es-m-txt-r h4,
			.es-m-txt-r h5,
			.es-m-txt-r h6 {
			  text-align: right !important;
			}
			.es-m-txt-j,
			.es-m-txt-j h1,
			.es-m-txt-j h2,
			.es-m-txt-j h3,
			.es-m-txt-j h4,
			.es-m-txt-j h5,
			.es-m-txt-j h6 {
			  text-align: justify !important;
			}
			.es-m-txt-l,
			.es-m-txt-l h1,
			.es-m-txt-l h2,
			.es-m-txt-l h3,
			.es-m-txt-l h4,
			.es-m-txt-l h5,
			.es-m-txt-l h6 {
			  text-align: left !important;
			}
			.es-m-txt-r img,
			.es-m-txt-c img,
			.es-m-txt-l img {
			  display: inline !important;
			}
			.es-m-txt-r .rollover:hover .rollover-second,
			.es-m-txt-c .rollover:hover .rollover-second,
			.es-m-txt-l .rollover:hover .rollover-second {
			  display: inline !important;
			}
			.es-m-txt-r .rollover span,
			.es-m-txt-c .rollover span,
			.es-m-txt-l .rollover span {
			  line-height: 0 !important;
			  font-size: 0 !important;
			}
			.es-spacer {
			  display: inline-table;
			}
			a.es-button,
			button.es-button {
			  font-size: 20px !important;
			  line-height: 120% !important;
			}
			a.es-button,
			button.es-button,
			.es-button-border {
			  display: inline-block !important;
			}
			.es-m-fw,
			.es-m-fw.es-fw,
			.es-m-fw .es-button {
			  display: block !important;
			}
			.es-m-il,
			.es-m-il .es-button,
			.es-social,
			.es-social td,
			.es-menu {
			  display: inline-block !important;
			}
			.es-adaptive table,
			.es-left,
			.es-right {
			  width: 100% !important;
			}
			.es-content table,
			.es-header table,
			.es-footer table,
			.es-content,
			.es-footer,
			.es-header {
			  width: 100% !important;
			  max-width: 600px !important;
			}
			.adapt-img {
			  width: 100% !important;
			  height: auto !important;
			}
			.es-mobile-hidden,
			.es-hidden {
			  display: none !important;
			}
			.es-desk-hidden {
			  width: auto !important;
			  overflow: visible !important;
			  float: none !important;
			  max-height: inherit !important;
			  line-height: inherit !important;
			}
			tr.es-desk-hidden {
			  display: table-row !important;
			}
			table.es-desk-hidden {
			  display: table !important;
			}
			td.es-desk-menu-hidden {
			  display: table-cell !important;
			}
			.es-menu td {
			  width: 1% !important;
			}
			table.es-table-not-adapt,
			.esd-block-html table {
			  width: auto !important;
			}
			.es-social td {
			  padding-bottom: 10px;
			}
			.h-auto {
			  height: auto !important;
			}
			.es-text-1693,
			.es-text-1693 p,
			.es-text-1693 a,
			.es-text-1693 h1,
			.es-text-1693 h2,
			.es-text-1693 h3,
			.es-text-1693 h4,
			.es-text-1693 h5,
			.es-text-1693 h6,
			.es-text-1693 ul,
			.es-text-1693 ol,
			.es-text-1693 li,
			.es-text-1693 span,
			.es-text-1693 sup,
			.es-text-1693 sub,
			.es-text-1693 u,
			.es-text-1693 b,
			.es-text-1693 strong,
			.es-text-1693 em,
			.es-text-1693 i {
			  font-size: 24px !important;
			}
			.es-text-8088,
			.es-text-8088 p,
			.es-text-8088 a,
			.es-text-8088 h1,
			.es-text-8088 h2,
			.es-text-8088 h3,
			.es-text-8088 h4,
			.es-text-8088 h5,
			.es-text-8088 h6,
			.es-text-8088 ul,
			.es-text-8088 ol,
			.es-text-8088 li,
			.es-text-8088 span,
			.es-text-8088 sup,
			.es-text-8088 sub,
			.es-text-8088 u,
			.es-text-8088 b,
			.es-text-8088 strong,
			.es-text-8088 em,
			.es-text-8088 i {
			  font-size: 16px !important;
			}
			.es-text-2338,
			.es-text-2338 p,
			.es-text-2338 a,
			.es-text-2338 h1,
			.es-text-2338 h2,
			.es-text-2338 h3,
			.es-text-2338 h4,
			.es-text-2338 h5,
			.es-text-2338 h6,
			.es-text-2338 ul,
			.es-text-2338 ol,
			.es-text-2338 li,
			.es-text-2338 span,
			.es-text-2338 sup,
			.es-text-2338 sub,
			.es-text-2338 u,
			.es-text-2338 b,
			.es-text-2338 strong,
			.es-text-2338 em,
			.es-text-2338 i {
			  font-size: 16px !important;
			}
			.es-text-6412,
			.es-text-6412 p,
			.es-text-6412 a,
			.es-text-6412 h1,
			.es-text-6412 h2,
			.es-text-6412 h3,
			.es-text-6412 h4,
			.es-text-6412 h5,
			.es-text-6412 h6,
			.es-text-6412 ul,
			.es-text-6412 ol,
			.es-text-6412 li,
			.es-text-6412 span,
			.es-text-6412 sup,
			.es-text-6412 sub,
			.es-text-6412 u,
			.es-text-6412 b,
			.es-text-6412 strong,
			.es-text-6412 em,
			.es-text-6412 i {
			  font-size: 16px !important;
			}
		  }
		  @media screen and (max-width: 384px) {
			.mail-message-content {
			  width: 414px !important;
			}
		  }
		</style>
	  </head>
	  <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
		<div
		  dir="ltr"
		  class="es-wrapper-color"
		  lang="en"
		  style="background-color: #fafafa"
		>
		  <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
			  <v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		  <![endif]-->
		  <table
			class="es-wrapper"
			width="100%"
			cellspacing="0"
			cellpadding="0"
			role="none"
			style="
			  mso-table-lspace: 0pt;
			  mso-table-rspace: 0pt;
			  border-collapse: collapse;
			  border-spacing: 0px;
			  padding: 0;
			  margin: 0;
			  width: 100%;
			  height: 100%;
			  background-repeat: repeat;
			  background-position: center top;
			  background-color: #fafafa;
			"
		  >
			<tr>
			  <td valign="top" style="padding: 0; margin: 0">
				<table
				  cellpadding="0"
				  cellspacing="0"
				  class="es-content"
				  align="center"
				  role="none"
				  style="
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
					border-collapse: collapse;
					border-spacing: 0px;
					width: 100%;
					table-layout: fixed !important;
				  "
				>
				  <tr>
					<td align="center" style="padding: 0; margin: 0">
					  <table
						bgcolor="#ffffff"
						class="es-content-body"
						align="center"
						cellpadding="0"
						cellspacing="0"
						role="none"
						style="
						  mso-table-lspace: 0pt;
						  mso-table-rspace: 0pt;
						  border-collapse: collapse;
						  border-spacing: 0px;
						  background-color: #ffffff;
						  width: 600px;
						"
					  >
						<tr>
						  <td
							align="left"
							style="
							  margin: 0;
							  padding-top: 30px;
							  padding-right: 20px;
							  padding-bottom: 10px;
							  padding-left: 20px;
							"
						  >
							<table
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  role="none"
							  style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								border-collapse: collapse;
								border-spacing: 0px;
							  "
							>
							  <tr>
								<td
								  align="center"
								  valign="top"
								  style="padding: 0; margin: 0; width: 560px"
								>
								  <table
									cellpadding="0"
									cellspacing="0"
									width="100%"
									role="presentation"
									style="
									  mso-table-lspace: 0pt;
									  mso-table-rspace: 0pt;
									  border-collapse: collapse;
									  border-spacing: 0px;
									"
								  >
									<tr>
									  <td
										align="center"
										style="
										  padding: 0;
										  margin: 0;
										  padding-bottom: 10px;
										  padding-top: 10px;
										  font-size: 0px;
										"
									  >
										<img
										  src="https://eegtciw.stripocdn.email/content/guids/CABINET_a3448362093fd4087f87ff42df4565c1/images/78501618239341906.png"
										  alt=""
										  style="
											display: block;
											font-size: 14px;
											border: 0;
											outline: none;
											text-decoration: none;
										  "
										  width="100"
										/>
									  </td>
									</tr>
									<tr>
									  <td
										align="center"
										class="es-m-txt-c es-text-1693"
										style="
										  padding: 0;
										  margin: 0;
										  padding-bottom: 10px;
										"
									  >
										<h2
										  style="
											margin: 0;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											mso-line-height-rule: exactly;
											letter-spacing: 0;
											font-size: 24px;
											font-style: normal;
											font-weight: bold;
											line-height: 24px;
											color: #333333;
										  "
										>
										  ​We are thrilled to have you join us for
										  the upcoming ${eventname}! Your
										  registration is confirmed, and we are
										  excited to share your unique code for the
										  event.
										</h2>
									  </td>
									</tr>
									<tr>
									  <td
										align="center"
										class="es-m-p0r es-m-p0l"
										style="
										  margin: 0;
										  padding-top: 5px;
										  padding-right: 40px;
										  padding-bottom: 5px;
										  padding-left: 40px;
										"
									  >
										<p
										  style="
											margin: 0;
											mso-line-height-rule: exactly;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											line-height: 21px;
											letter-spacing: 0;
											color: #333333;
											font-size: 14px;
										  "
										>
										  Make sure to keep this code safe, as it
										  will be required for check-in at the
										  event. We recommend saving this email for
										  easy reference.
										</p>
									  </td>
									</tr>
								  </table>
								</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<tr>
						  <td
							align="left"
							style="
							  margin: 0;
							  padding-right: 20px;
							  padding-bottom: 10px;
							  padding-left: 20px;
							  padding-top: 10px;
							"
						  >
							<table
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  role="none"
							  style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								border-collapse: collapse;
								border-spacing: 0px;
							  "
							>
							  <tr>
								<td
								  align="center"
								  valign="top"
								  style="padding: 0; margin: 0; width: 560px"
								>
								  <table
									cellpadding="0"
									cellspacing="0"
									width="100%"
									style="
									  mso-table-lspace: 0pt;
									  mso-table-rspace: 0pt;
									  border-collapse: separate;
									  border-spacing: 0px;
									  border-left: 2px dashed #cccccc;
									  border-right: 2px dashed #cccccc;
									  border-top: 2px dashed #cccccc;
									  border-bottom: 2px dashed #cccccc;
									  border-radius: 5px;
									"
									role="presentation"
								  >
									<tr>
									  <td
										align="center"
										class="es-m-txt-c"
										style="
										  padding: 0;
										  margin: 0;
										  padding-right: 20px;
										  padding-left: 20px;
										  padding-top: 20px;
										"
									  >
										<h2
										  style="
											margin: 0;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											mso-line-height-rule: exactly;
											letter-spacing: 0;
											font-size: 26px;
											font-style: normal;
											font-weight: bold;
											line-height: 31px;
											color: #333333;
										  "
										>
										  Your PIN code
										</h2>
									  </td>
									</tr>
									<tr>
									  <td
										align="center"
										class="es-m-txt-c"
										style="
										  margin: 0;
										  padding-right: 20px;
										  padding-left: 20px;
										  padding-top: 10px;
										  padding-bottom: 20px;
										"
									  >
										<h1
										  style="
											margin: 0;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											mso-line-height-rule: exactly;
											letter-spacing: 0;
											font-size: 46px;
											font-style: normal;
											font-weight: bold;
											line-height: 55px;
											color: #5c68e2;
										  "
										>
										  <strong>${otp}</strong>
										</h1>
									  </td>
									</tr>
								  </table>
								</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<tr>
						  <td
							align="left"
							style="
							  padding: 0;
							  margin: 0;
							  padding-right: 20px;
							  padding-bottom: 10px;
							  padding-left: 20px;
							"
						  >
							<table
							  cellpadding="0"
							  cellspacing="0"
							  width="100%"
							  role="none"
							  style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								border-collapse: collapse;
								border-spacing: 0px;
							  "
							>
							  <tr>
								<td
								  align="center"
								  valign="top"
								  style="padding: 0; margin: 0; width: 560px"
								>
								  <table
									cellpadding="0"
									cellspacing="0"
									width="100%"
									style="
									  mso-table-lspace: 0pt;
									  mso-table-rspace: 0pt;
									  border-collapse: separate;
									  border-spacing: 0px;
									  border-radius: 5px;
									"
									role="presentation"
								  >
									<tr>
									  <td
										align="left"
										style="padding: 0; margin: 0"
									  >
										<h2
										  align="center"
										  style="
											margin: 0;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											mso-line-height-rule: exactly;
											letter-spacing: 0;
											font-size: 26px;
											font-style: normal;
											font-weight: bold;
											line-height: 31px;
											color: #333333;
											white-space: nowrap;
										  "
										>
										  Registered Name
										</h2>
										<h4
										  align="center"
										  style="
											margin: 0;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											mso-line-height-rule: exactly;
											letter-spacing: 0;
											font-size: 24px;
											font-style: normal;
											font-weight: normal;
											line-height: 29px;
											color: #333333;
											white-space: nowrap;
										  "
										>
										  &nbsp;${firstname} ${lastname}
										</h4>
									  </td>
									</tr>
								  </table>
								</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<tr>
						  <td
							align="left"
							style="
							  padding: 0;
							  margin: 0;
							  padding-right: 20px;
							  padding-left: 20px;
							  padding-top: 20px;
							"
						  >
							<table
							  cellpadding="0"
							  cellspacing="0"
							  role="none"
							  style="
								mso-table-lspace: 0pt;
								mso-table-rspace: 0pt;
								border-collapse: collapse;
								border-spacing: 0px;
							  "
							>
							  <tr>
								<td
								  align="left"
								  style="padding: 0; margin: 0; width: 560px"
								>
								  <table
									cellpadding="0"
									cellspacing="0"
									width="100%"
									role="presentation"
									style="
									  mso-table-lspace: 0pt;
									  mso-table-rspace: 0pt;
									  border-collapse: collapse;
									  border-spacing: 0px;
									"
								  >
									<tr>
									  <td
										align="left"
										class="es-text-8088"
										style="
										  padding: 0;
										  margin: 0;
										  padding-bottom: 10px;
										"
									  >
										<p
										  align="center"
										  style="
											margin: 0;
											mso-line-height-rule: exactly;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											line-height: 24px;
											letter-spacing: 0;
											color: #333333;
											font-size: 16px;
										  "
										>
										  Make sure to keep this code safe, as it
										  will be required for check-in at the
										  event. We recommend saving this email for
										  easy reference.
										</p>
									  </td>
									</tr>
									<tr>
									  <td
										align="left"
										class="es-text-2338"
										style="
										  padding: 0;
										  margin: 0;
										  padding-bottom: 10px;
										"
									  >
										<p
										  align="center"
										  style="
											margin: 0;
											mso-line-height-rule: exactly;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											line-height: 24px;
											letter-spacing: 0;
											color: #333333;
											font-size: 16px;
										  "
										>
										  Feel free to explore the event agenda and
										  plan your schedule ahead of time. If you
										  have any questions or need assistance, our
										  team is here to help.
										</p>
									  </td>
									</tr>
									<tr>
									  <td
										align="left"
										class="es-text-6412"
										style="
										  padding: 0;
										  margin: 0;
										  padding-bottom: 10px;
										"
									  >
										<p
										  align="center"
										  style="
											margin: 0;
											mso-line-height-rule: exactly;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											line-height: 24px;
											letter-spacing: 0;
											color: #333333;
											font-size: 16px;
										  "
										>
										  We can't wait to see you at ${eventname}
										  and create memorable experiences together!
										</p>
										<p
										  align="center"
										  style="
											margin: 0;
											mso-line-height-rule: exactly;
											font-family: arial, 'helvetica neue',
											  helvetica, sans-serif;
											line-height: 24px;
											letter-spacing: 0;
											color: #333333;
											font-size: 16px;
										  "
										>
										If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:info@eventeco.online">info@eventeco.online</a>. We are here to help!
										</p>
									  </td>
									</tr>
								  </table>
								</td>
							  </tr>
							</table>
						  </td>
						</tr>
					  </table>
					</td>
				  </tr>
				</table>
				<table
				  cellpadding="0"
				  cellspacing="0"
				  class="es-content"
				  align="center"
				  role="none"
				  style="
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
					border-collapse: collapse;
					border-spacing: 0px;
					width: 100%;
					table-layout: fixed !important;
				  "
				>
				  <tr>
					<td
					  class="es-info-area"
					  align="center"
					  style="padding: 0; margin: 0"
					>
					  <table
						class="es-content-body"
						align="center"
						cellpadding="0"
						cellspacing="0"
						style="
						  mso-table-lspace: 0pt;
						  mso-table-rspace: 0pt;
						  border-collapse: collapse;
						  border-spacing: 0px;
						  background-color: transparent;
						  width: 600px;
						"
						bgcolor="#FFFFFF"
						role="none"
					  ></table>
					</td>
				  </tr>
				</table>
			  </td>
			</tr>
		  </table>
		</div>
	  </body>
	</html>`;
};
module.exports = otppppTemplate;
