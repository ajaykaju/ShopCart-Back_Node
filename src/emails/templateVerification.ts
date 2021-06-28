const verificationTemplateGenerator = (name: string, link: string) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
    data-editor-version="2"
    class="sg-campaigns"
    xmlns="http://www.w3.org/1999/xhtml"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
          body {
            width: 600px;
            margin: 0 auto;
          }
          table {
            border-collapse: collapse;
          }
          table,
          td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          }
          img {
            -ms-interpolation-mode: bicubic;
          }
        </style>
      <![endif]-->
      <style type="text/css">
        body,
        p,
        div {
          font-family: arial, helvetica, sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #1188e6;
          text-decoration: none;
        }
        p {
          margin: 0;
          padding: 0;
        }
        table.wrapper {
          width: 100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width: 480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
      <!--user entered Head Start-->
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <style type="text/css">
        body,
        p,
        div {
          font-family: arial, helvetica, sans-serif;
          font-size: 14px;
        }
        body {
          color: #000000;
        }
        body a {
          color: #1188e6;
          text-decoration: none;
        }
        p {
          margin: 0;
          padding: 0;
        }
        table.wrapper {
          width: 100% !important;
          table-layout: fixed;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: 100%;
          -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        img.max-width {
          max-width: 100% !important;
        }
        .column.of-2 {
          width: 50%;
        }
        .column.of-3 {
          width: 33.333%;
        }
        .column.of-4 {
          width: 25%;
        }
        ul ul ul ul {
          list-style-type: disc !important;
        }
        ol ol {
          list-style-type: lower-roman !important;
        }
        ol ol ol {
          list-style-type: lower-latin !important;
        }
        ol ol ol ol {
          list-style-type: decimal !important;
        }
        @media screen and (max-width: 480px) {
          .preheader .rightColumnContent,
          .footer .rightColumnContent {
            text-align: left !important;
          }
          .preheader .rightColumnContent div,
          .preheader .rightColumnContent span,
          .footer .rightColumnContent div,
          .footer .rightColumnContent span {
            text-align: left !important;
          }
          .preheader .rightColumnContent,
          .preheader .leftColumnContent {
            font-size: 80% !important;
            padding: 5px 0;
          }
          table.wrapper-mobile {
            width: 100% !important;
            table-layout: fixed;
          }
          img.max-width {
            height: auto !important;
            max-width: 100% !important;
          }
          a.bulletproof-button {
            display: block !important;
            width: auto !important;
            font-size: 80%;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .columns {
            width: 100% !important;
          }
          .column {
            display: block !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .social-icon-column {
            display: inline-block !important;
          }
        }
      </style>
      <!--End Head user entered-->
    </head>
    <body>
      <center
        class="wrapper"
        data-link-color="#1188E6"
        data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f7f7f5;"
      >
        <div class="webkit">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            class="wrapper"
            bgcolor="#f7f7f5"
          >
            <tr>
              <td valign="top" bgcolor="#f7f7f5" width="100%">
                <table
                  width="100%"
                  role="content-container"
                  class="outer"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td width="100%">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tr>
                          <td>
                            <!--[if mso]>
        <center>
        <table><tr><td width="600">
      <![endif]-->
                            <table
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              style="width: 100%; max-width: 600px"
                              align="center"
                            >
                              <tr>
                                <td
                                  role="modules-container"
                                  style="
                                    padding: 0px 5px 0px 5px;
                                    color: #000000;
                                    text-align: left;
                                  "
                                  bgcolor="#F7F7F5"
                                  width="100%"
                                  align="left"
                                >
                                  <table
                                    class="module preheader preheader-hide"
                                    role="module"
                                    data-type="preheader"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      display: none !important;
                                      mso-hide: all;
                                      visibility: hidden;
                                      opacity: 0;
                                      color: transparent;
                                      height: 0;
                                      width: 0;
                                    "
                                  >
                                    <tr>
                                      <td role="module-content">
                                        <p>ShopCart signup confirmation mail</p>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    class="module"
                                    role="module"
                                    data-type="text"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="table-layout: fixed"
                                    data-muid="1ea236a1-8a20-4ad0-b007-509cc4501a18"
                                    data-mc-module-version="2019-10-22"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            padding: 50px 0px 18px 0px;
                                            line-height: 0px;
                                            text-align: inherit;
                                            background-color: #f7f7f5;
                                          "
                                          height="100%"
                                          valign="top"
                                          bgcolor="#F7F7F5"
                                          role="module-content"
                                        >
                                          <div>
                                            <div
                                              style="
                                                font-family: inherit;
                                                text-align: inherit;
                                              "
                                            >
                                              <span
                                                style="
                                                  font-size: 24px;
                                                  color: #404040;
                                                "
                                                ><strong>ShopCart</strong></span
                                              >
                                            </div>
                                            <div></div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    align="center"
                                    width="100%"
                                    role="module"
                                    data-type="columns"
                                    style="padding: 0px 0px 0px 0px; border-radius: 10px;"
                                    bgcolor="#FFFFFF"
                                    data-distribution="1"
                                  >
                                    <tbody>
                                      <tr role="module-content">
                                        <td height="100%" valign="top">
                                          <table
                                            width="590"
                                            style="
                                              width: 590px;
                                              border-spacing: 0;
                                              border-collapse: collapse;
                                              margin: 0px 0px 0px 0px;
                                            "
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="left"
                                            border="0"
                                            bgcolor=""
                                            class="column column-0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style="
                                                    padding: 0px;
                                                    margin: 0px;
                                                    border-spacing: 0;
                                                  "
                                                >
                                                  <table
                                                    class="wrapper"
                                                    role="module"
                                                    data-type="image"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="table-layout: fixed"
                                                    data-muid="bd0c77d3-2129-4e8b-9082-fc716c0ab474"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            font-size: 6px;
                                                            line-height: 10px;
                                                            padding: 0px 0px 0px
                                                              0px;
                                                          "
                                                          valign="top"
                                                          align="center"
                                                        >
                                                          <img
                                                            class="max-width"
                                                            border="0"
                                                            style="
                                                              display: block;
                                                              color: #000000;
                                                              text-decoration: none;
                                                              font-family: Helvetica,
                                                                arial, sans-serif;
                                                              font-size: 16px;
                                                              max-width: 100% !important;
                                                              width: 100%;
                                                              height: auto !important;
                                                              border-top-left-radius: 10px;
                                                              border-top-right-radius: 10px;
                                                            "
                                                            width="590"
                                                            alt=""
                                                            data-proportionally-constrained="true"
                                                            data-responsive="true"
                                                            src="http://cdn.mcauto-images-production.sendgrid.net/2a523e8e230e7f3f/8ed69039-1431-4df1-a0b2-b1403a6d9273/684x283.png"
                                                          />
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <table
                                                    class="module"
                                                    role="module"
                                                    data-type="text"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="table-layout: fixed"
                                                    data-muid="8112e90f-57a1-42d5-968b-b4f2607c9a6e"
                                                    data-mc-module-version="2019-10-22"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            padding: 18px 0px 18px
                                                              0px;
                                                            line-height: 22px;
                                                            text-align: inherit;
                                                            background-color: #ffffff;
                                                          "
                                                          height="100%"
                                                          valign="top"
                                                          bgcolor="#ffffff"
                                                          role="module-content"
                                                        >
                                                          <div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  color: #6b6969;
                                                                  font-size: 36px;
                                                                "
                                                                >Email
                                                                Confirmation</span
                                                              >
                                                            </div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  color: #6b6969;
                                                                  font-size: 14px;
                                                                  font-family: helvetica,
                                                                    sans-serif;
                                                                "
                                                                >Hey ${name},
                                                                you're almost
                                                                ready to start
                                                                exploring
                                                                ShopCart.</span
                                                              >
                                                            </div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  color: #6b6969;
                                                                  font-size: 14px;
                                                                  font-family: helvetica,
                                                                    sans-serif;
                                                                "
                                                                >Simply click the
                                                                link below to
                                                                verify your email
                                                                address.</span
                                                              >
                                                            </div>
                                                            <div></div>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <table
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    class="module"
                                                    data-role="module-button"
                                                    data-type="button"
                                                    role="module"
                                                    style="table-layout: fixed"
                                                    width="100%"
                                                    data-muid="9938e421-98f6-457d-b4ad-7e07553e5792"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          align="center"
                                                          bgcolor=""
                                                          class="outer-td"
                                                          style="
                                                            padding: 0px 0px 20px
                                                              0px;
                                                          "
                                                        >
                                                          <table
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="wrapper-mobile"
                                                            style="
                                                              text-align: center;
                                                            "
                                                          >
                                                            <tbody>
                                                              <tr>
                                                                <td
                                                                  align="center"
                                                                  bgcolor="rgba(0, 64, 138, 0.9)"
                                                                  class="inner-td"
                                                                  style="
                                                                    border-radius: 6px;
                                                                    font-size: 16px;
                                                                    text-align: center;
                                                                    background-color: inherit;
                                                                  "
                                                                >
                                                                  <a
                                                                    href="${link}"
                                                                    style="
                                                                      background-color: rgba(
                                                                        0,
                                                                        64,
                                                                        138,
                                                                        0.9
                                                                      );
                                                                      border: 1px
                                                                        solid
                                                                        rgba(
                                                                          0,
                                                                          64,
                                                                          138,
                                                                          0.9
                                                                        );
                                                                      border-color: rgba(
                                                                        0,
                                                                        64,
                                                                        138,
                                                                        0.9
                                                                      );
                                                                      border-radius: 5px;
                                                                      border-width: 1px;
                                                                      color: #ffffff;
                                                                      display: inline-block;
                                                                      font-size: 14px;
                                                                      font-weight: normal;
                                                                      letter-spacing: 0px;
                                                                      line-height: normal;
                                                                      padding: 12px
                                                                        18px 12px
                                                                        18px;
                                                                      text-align: center;
                                                                      text-decoration: none;
                                                                      border-style: solid;
                                                                    "
                                                                    target="_blank"
                                                                    >Verify email
                                                                    address</a
                                                                  >
                                                                </td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <table
                                                    class="module"
                                                    role="module"
                                                    data-type="text"
                                                    border="0"
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    width="100%"
                                                    style="table-layout: fixed;"
                                                    data-muid="136dcffe-6d86-4e14-8d54-ab4ab23a02f4"
                                                    data-mc-module-version="2019-10-22"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            padding: 30px 0px 0px
                                                              0px;
                                                            line-height: 22px;
                                                            text-align: inherit;
                                                            background-color: #979393;
                                                            
                                                    border-bottom-left-radius: 10px;
                                                    border-bottom-right-radius: 10px;
                                                          "
                                                          height="100%"
                                                          valign="top"
                                                          bgcolor="#979393"
                                                          role="module-content"
                                                        >
                                                          <div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  font-size: 14px;
                                                                  color: #ffffff;
                                                                "
                                                                >Email sent by
                                                                ShopCart</span
                                                              >
                                                            </div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                                
                                                    border-bottom-left-radius: 10px;
                                                    border-bottom-right-radius: 10px;
                                                              "
                                                            >
                                                              <span
                                                                style="
                                                                  font-style: normal;
                                                                  font-variant-ligatures: normal;
                                                                  font-variant-caps: normal;
                                                                  font-weight: 400;
                                                                  letter-spacing: normal;
                                                                  orphans: 2;
                                                                  text-align: start;
                                                                  text-indent: 0px;
                                                                  text-transform: none;
                                                                  white-space: normal;
                                                                  widows: 2;
                                                                  word-spacing: 0px;
                                                                  -webkit-text-stroke-width: 0px;
                                                                  text-decoration-thickness: initial;
                                                                  text-decoration-style: initial;
                                                                  text-decoration-color: initial;
                                                                  float: none;
                                                                  display: inline;
                                                                  font-family: helvetica,
                                                                    sans-serif;
                                                                  font-size: 14px;
                                                                  color: #ffffff;
                                                                "
                                                                >© 2021-2022,
                                                                ShopCart, Inc. or
                                                                its
                                                                affiliates</span
                                                              ><span
                                                                style="
                                                                  font-family: helvetica,
                                                                    sans-serif;
                                                                  font-size: 14px;
                                                                  color: #ffffff;
                                                                "
                                                                >&nbsp;</span
                                                              >
                                                            </div>
                                                            <div
                                                              style="
                                                                font-family: inherit;
                                                                text-align: center;
                                                              "
                                                            >
                                                              <br />
                                                            </div>
                                                            <div></div>
                                                          </div>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <!--[if mso]>
                                      </td>
                                    </tr>
                                  </table>
                                </center>
                                <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
  `;
};

export default verificationTemplateGenerator;
