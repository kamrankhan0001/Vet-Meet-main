import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-black py-10 my-2 ">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Online Shopping
          </h3>
          <ul className="space-y-2 text-sm">
            
            <li>
              <Link to="/">Dogs</Link>
            </li>

            <li>
              <Link to="/">Cats</Link>
            </li>
            <li>
              <a href="#">Small Pets</a>
            </li>
            
            <li>
              <Link to="/consult-a-vet">Consult a Vet</Link>
            </li>
            <li>
              <a href="#">Dog Behaviour</a>
            </li>
            
            <li>
              <Link to="/pharmacy">Pet Pharmacy</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to = "/clinic">Vet&Meet Clinics</Link>
            </li>
            
           
            <li>
              
              <Link to="/our-story">Our Story</Link>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
             
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <a href="#">Vet&Meet Companion</a>
            </li>
            <li>
              <a href="#">Vet&Meet</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact-us">My Account</Link>
            </li>
            <li>
              
              <Link to="/my-orders">Track Your Order</Link> 
            </li>
            
            
            <li>
              
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              
              <Link to="/refund-policy">Return Policy</Link>
            </li>
            <li>
              
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              
              <Link to="/terms-of-use">Terms of Use</Link>
            </li>
           <li>
              
              <Link to="/refer-and-save">Refer and Save</Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-2">📞 1800-5723-575</p>
          <p className="text-sm mb-4">📧 support@Vet&Meet.com</p>

          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex flex-wrap gap-2 text-sm">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">YouTube</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Experience Vet&Meet App</h4>
            <p className="text-sm">Download from App Store / Play Store</p>
          </div>
        </div>
      </div>

      
      <div className="px-4 mt-10 max-w-full overflow-x-hidden overflow-y-hidden">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Popular Searches
        </h2>
        <div className="text-sm leading-7 sm:leading-9 max-h-60 pr-2 break-words">
          <p>
            Dog Food | Dog Collars Leashes Harnesses | Me-O| Cat Clothes | Cat
            Litter | Dog Raincoat | Dog Toys | Dog Beds | Veg Dog Food | Dog
            Biscuits Cookies | Cat Dry Food | Cat Food | Pet Pharmacy | Pedigree
            | Cat Toys | Drools | Royal Canin | Dog Grooming | Dog Carrier |
            Dogs Bones Chews | Pedigree Pro | Sheba | Whiskas | Cat Collars
            Leashes Harnesses | Cat Wet Food | Dog Shampoos & Conditioners | Cat
            Carriers Travel Supplies | Dog Accessories | Dog Bowls Feeders | Dog
            Clothes | Dog Treats | Cat Accessories | Cat Litter Boxes | Cat
            Treats | Farmina | Dog Leashes | Cat Kitten Food | Cat Beds Mats
            Tents | Deworming Tablets | Cat Shampoo & Conditioners | Dog Fleas &
            Ticks | Dog Boots | Orijen Dog Food | Acana Dog Food | Dog Training
            & Behaviour | Dog Food Supplements & Vitamins | Dog Sweaters | Dog
            Jackets | Blanket & cushions | Shoes Boots & Socks | Sherwani |
            Raincoats | Dog Skin & Coat Care | Skin Care | Shampoos &
            Conditioners | Calcium Supplements | Join Pain Medication | Gut
            Health Care | Bow-ties | Ethnic wear | Dog Toys | Dog Beds | Cat
            Sweaters & Hoodies | Furry & Plush Cat Beds | Cat Shampoos &
            Conditioners | Fleas & Ticks Care | Cat Joint care Supplements | Cat
            Skin Care Products | Anxiety Care & Comforting Products |
            Interactive Cat Toys | Catnip Toys | Clumping Cat Litter |
            Deodorizers & Litter Fresheners | Litter Boxes & Cat Toilets |
            Rabbit Products | Fish Food | Bird Food.
          </p>
        </div>
      </div>

      <div className="text-center text-sm mt-10">
        &copy; {new Date().getFullYear()} Vet&Meet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



