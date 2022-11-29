import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "./mainLayout";


const Privacy = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <div>
      <MainLayout>
        <div className='className="w-full flex mx-10 flex-col items-center justify-center h-[100%] '>
          <div className="lg:w-[60%] ">
            <div className="font-[500] base:mb-4 lg:mb-[2rem] base:text-[2rem] lg:text-[3rem] mt-7 text-center">
              Privacy Policy
            </div>
            <div className="lg:text-[1.2rem] base:text-[1rem]">
              <div>
                This Privacy Policy governs the manner in which we collect, use,
                maintain and disclose information collected from users (each, a
                “User”) of this website (“Site”). This privacy policy applies to
                this Site and to all the products and services we offer.
              </div>

              <br></br>
              <div className="font-[600]   ">
                Do you collect data I input into calculators?
              </div>
              <div className="  ">
                We do not collect data that our users enter into our
                Calculators. We neither store nor sell the data that you enter
                in our calculators.
              </div>

          <br></br>
          <div className="font-[600] ">
            Third-party websites
          </div>
          <div className="">
            Users may find advertising or other content on our Site that link to
            the sites and services of our partners, suppliers, advertisers,
            sponsors, licencors and other third parties. We do not control the
            content or links that appear on these sites and are not responsible
            for the practices employed by websites linked to or from our Site.
            In addition, these sites or services, including their content and
            links, may be constantly changing. These sites and services may have
            their own privacy policies and customer service policies. Browsing
            and interaction on any other website, including websites which have
            a link to our Site, is subject to that website&apos;s own terms and
            policies.
          </div>

          <br></br>
          <div className="font-[600]   ">
            Advertising
          </div>
          <div className="  ">
            Ads appearing on our site may be delivered to Users by advertising
            partners, who may set cookies. These cookies allow the ad server to
            recognise your computer each time they send you an online
            advertisement to compile non-personal identification information
            about you or others who use your computer. This information allows
            ad networks to, among other things, deliver targeted advertisements
            that they believe will be of most interest to you. This privacy
            policy doesn't cover the use of cookies by any advertisers. For more
            information, see CCPA and GDPR Compliance Notice.
          </div>

          <br></br>
          <div className="font-[600] ">
            Google Adsense
          </div>
          <div className="  ">
            Some of the ads may be served by Google. Google's use of the DART
            cookie enables it to serve ads to Users based on their visit to our
            Site and other sites on the Internet. DART uses “non-personally
            identifiable information” and does NOT track personal information
            about you, such as your name, email address, physical address, etc.
            You may opt out of the use of the DART cookie by visiting the Google
            ad and content network privacy policy.
            <ul className="list-disc ml-7">
              <li>
                Third party vendors, including Google, use cookies to serve ads
                based on a user's prior visits to your website.
              </li>
              <li>
                Google's use of the DoubleClick cookie enables it and its
                partners to serve ads to you that are based on your visit to
                this site and/or other sites across the Internet.
              </li>
              <li>
                You may opt out of a third-party vendor's use of cookies for
                interest-based advertising.
              </li>
            </ul>
          </div>

              <br></br>
              <div className="font-[600]    ">
                Changes to this Privacy Policy
              </div>
              <div className=" ">
                We have the discretion to update this privacy policy at any
                time. When we do, we will revise the updated date at the bottom
                of this page. We encourage Users to frequently check this page
                for any changes to stay informed about how we are helping to
                protect the personal information we collect. You acknowledge and
                agree that it is your responsibility to review this privacy
                policy periodically and become aware of modifications.
              </div>

              <br></br>
              <div className="font-[600]    ">
                Your acceptance to these terms
              </div>
              <div className="  ">
                By using this Site, you confirm and acknowledge your acceptance
                of this policy and terms of service. If you do not agree to this
                policy, please do not use our Site. Your continued use of the
                Site following the posting of changes to this policy will be
                deemed your acceptance of those changes.
              </div>

              <br></br>
              <div className="font-[600]    ">Contacting Us</div>
              <div className="  ">
                If you have any questions about this Privacy Policy, the
                practices of this site, or your dealings with this site, please
                contact us at: cgcalculator996(at)gmail.com
                <br />
                <br />
                This document was last updated on November 23, 2022.
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Privacy;
