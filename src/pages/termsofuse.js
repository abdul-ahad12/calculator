import React from "react";
import MainLayout from "./mainLayout";

const Termsofuse = () => {
  return (
    <div>
      <MainLayout>
        <div className='className="w-full flex mx-10 flex-col items-center justify-center h-[100%] '>
          <div className="lg:w-[60%]">
            <div className="font-[500] base:mb-4 lg:mb-[2rem] base:text-[2rem] lg:text-[3rem] mt-7 text-center ">
              Terms of Use
            </div>

            <div className="lg:text-[1.2rem] base:text-[1rem]">
              <div>
                This site and all Calculators together with answers are the
                copyrighted property of <span className="font-[600]">cgcalculator.com</span>, and are not to be
                considered to be in the public domain. This site and all the
                content within this site, unless otherwise noted, is subject to
                the following terms and conditions.
                <br />
                Any use of this site or any of the content of this site that is
                inconsistent with these terms and conditions is strictly
                prohibited.
              </div>
              <br />

              <div className="flex gap-2">
                <div className="w-8 ">
                  <img src="Tick.png" alt="" />
                </div>
                <div className="font-[600]">You May</div>
              </div>

              <div>
                <ul className="list-disc ml-7">
                  <li>
                    You may print content from this site for your private,
                    non-commercial use.
                  </li>
                  <li>
                    You may and are encouraged to link to this site. However,
                    you may not display content from this site framed within
                    your site or any other site. In other words, any links must
                    open in a new window or on top of the page containing the
                    link.
                  </li>
                </ul>
              </div>

              <br />
              <div className="flex gap-2">
                <div className="w-8 ">
                  <img src="Cross.png" alt="" />
                </div>
                <div className="font-[600]">You May Not</div>
              </div>

              <div>
                <ul className="list-disc ml-7">
                  <li>
                    You may not in any manner claim an endorsement of,
                    affiliation with or connection to this site.
                  </li>
                  <li>
                    You may not in any manner claim authorship (in part or in
                    whole) of any of the content on this site.
                  </li>
                  <li>
                    You may not in any way claim ownership (in part or in whole)
                    of any of the content on this site.
                  </li>
                  <li>
                    The content from this site may not be incorporated into any
                    other product. You may not in any way claim ownership (in
                    part or in whole) of any of the content on this site.
                  </li>
                  <li>
                    You may not sell or profit from the sale of any portion of
                    this site, of any content from this site, of this site's
                    name, or links to this site.
                  </li>
                  <li>
                    You may not display, use, reproduce, distribute or otherwise
                    use any content from this site for any commercial purpose.
                  </li>
                </ul>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Termsofuse;
