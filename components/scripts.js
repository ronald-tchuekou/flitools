import React, {useEffect} from 'react';
import feather from 'feather-icons';

export default function () {
    useEffect(() => {
        if(feather !== undefined){
            feather.replace({
                width: 14,
                height: 14
            });
        }
    }, [])
    return (
        <>

            {/* BEGIN: Vendor JS*/}
            <script src="/app-assets/vendors/js/vendors.min.js"> </script>
            {/* BEGIN Vendor JS*/}

            {/* BEGIN: Page Vendor JS*/}
            <script src="/app-assets/vendors/js/forms/wizard/bs-stepper.min.js"></script>
            <script src="/app-assets/vendors/js/extensions/wNumb.min.js"> </script>
            <script src="/app-assets/vendors/js/extensions/nouislider.min.js"> </script>
            <script src="/app-assets/vendors/js/extensions/toastr.min.js"> </script>
            <script src="/app-assets/vendors/js/extensions/swiper.min.js"></script>

            {/* END: Page Vendor JS*/}

            {/* BEGIN: Theme JS*/}
            <script src="/app-assets/js/core/app-menu.js"> </script>
            <script src="/app-assets/js/core/app.js"> </script>
            {/* END: Theme JS*/}

            {/* BEGIN: Page JS*/}
            <script src="/app-assets/js/scripts/pages/app-ecommerce.js"> </script>
            <script src="/app-assets/js/scripts/pages/app-ecommerce-details.js"> </script>
            <script src="/app-assets/js/scripts/pages/app-ecommerce-checkout.js"> </script>
            {/* END: Page JS*/}

            <script src="/app-assets/vendors/js/feather-icons/feather-icons.min.js"> </script>
            <script>
                {`if(feather !== undefined){
                    feather.replace({
                        width: 14,
                        height: 14
                    });
                }`}
            </script>
        </>
    );
}
