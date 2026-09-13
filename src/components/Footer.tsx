


import footlogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        
        <div>

  <div className="max-w-[1340px] mx-auto my-20 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
    
    {/* About */}
    <div className="sm:col-span-2 lg:col-span-1">
      <img src={footlogo} alt="Dev Stack" />

      <p className="max-w-[500px] mt-4">
        Curated tools, technologies, and resources for developers building
        modern software.
      </p>

      <ul className="flex gap-4 font-bold my-4">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>

    {/* Product */}
    <div>
      <h3 className="font-bold">PRODUCT</h3>

      <ul className="space-y-3 mt-6">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-bold">COMPANY</h3>

      <ul className="space-y-3 mt-6">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="font-bold">LEGAL</h3>

      <ul className="space-y-3 mt-6">
        <li>GitHub</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  </div>


  <div className="max-w-[1400px] mx-auto px-5 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-center sm:text-left">
    
    <h5>© 2026 Dev Stack. All rights reserved.</h5>

    <div className="flex gap-4">
      <h5>Privacy</h5>
      <h5>Terms</h5>
    </div>
  </div>
</div>
        
    );
};

export default Footer;