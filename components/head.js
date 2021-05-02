import Head from 'next/head';
import {Scripts} from "./index";

export default function ({title}) {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui"/>
            <meta name="description" content="flitools"/>
            <meta name="keywords" content="web site"/>
            <meta name="author" content="Ronald Tchuekou"/>
            <title>{title}</title>
            <link rel="apple-touch-icon" href="app-assets/images/elements/apple-watch.png"/>
            <link rel="shortcut icon" type="image/x-icon" href="app-assets/images/ico/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet"/>

            {/* BEGIN: Vendor CSS*/}
            <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/nouislider.min.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/toastr.min.css"/>
            {/* END: Vendor CSS*/}

            {/* BEGIN: Theme CSS*/}
            <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/components.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/themes/dark-layout.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/themes/bordered-layout.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/themes/semi-dark-layout.css"/>

            {/* BEGIN: Page CSS*/}
            <link rel="stylesheet" type="text/css" href="app-assets/css/core/menu/menu-types/vertical-menu.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/plugins/extensions/ext-component-sliders.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/pages/app-ecommerce.css"/>
            <link rel="stylesheet" type="text/css" href="app-assets/css/plugins/extensions/ext-component-toastr.css"/>
            {/* END: Page CSS*/}

        </Head>
    )
}
