import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Tip1 from "../assets/Health/HealthTip1.png";
import Tip2 from "../assets/Health/HealthTip2.png";
import Tip3 from "../assets/Health/HealthTip3.png";
import Tip4 from "../assets/Health/HealthTip4.png";
import Tip5 from "../assets/Health/HealthTip5.png";


const fullArticlesContent = [
  {
    title: "Understanding Castration in Pets: A Complete Guide",
    image: Tip1,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Deciding whether to spay or neuter your pet is a significant choice for any pet owner. Castration, the surgical removal of a male animal's testicles, is a common procedure that offers numerous benefits for both your pet and your household. This guide will walk you through everything you need to know.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Consider Castration?</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Health Benefits:</strong> Castration can significantly reduce the risk of certain health problems, such as testicular cancer and some prostate issues, which are common in unneutered male dogs.</li>
          <li><strong>Behavioral Improvements:</strong> Many owners notice positive changes in their pet's behavior after castration. This often includes a decrease in aggression, roaming (trying to escape to find a mate), marking territory with urine, and excessive barking or howling.</li>
          <li><strong>Population Control:</strong> One of the most important reasons to neuter your pet is to help control pet overpopulation. Millions of animals end up in shelters each year, and spaying/neutering plays a vital role in reducing these numbers.</li>
          <li><strong>Reduced Stress:</strong> For male pets, the constant urge to find a mate can be very stressful. Castration eliminates this hormonal drive, leading to a calmer, more content pet.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">The Procedure and Recovery</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Castration is a routine surgical procedure performed by a veterinarian, typically under general anesthesia. It's generally very safe. Your vet will provide specific pre-operative instructions, including fasting guidelines.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          After the surgery, your pet will need a quiet place to recover. You'll need to monitor the incision site for any swelling or redness and prevent your pet from licking or chewing at it (an Elizabethan collar, or "cone," is often used for this). Most pets recover quickly, usually within 7-10 days. Your vet will advise on pain management and follow-up care.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Making the Best Decision</h3>
        <p className="text-gray-700 leading-relaxed">
          It's always best to discuss castration with your veterinarian. They can assess your pet's individual health, age, and lifestyle to help you make an informed decision that's right for your furry friend.
        </p>
      </>
    ),
  },
  {
    title: "Multivitamins for Pets: Why They’re Important for Your Dog",
    image: Tip2,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Just like humans, dogs can benefit from a little extra nutritional support. While a high-quality, balanced diet is the foundation of good health for your canine companion, multivitamins can play a crucial role in filling potential gaps and boosting overall well-being.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Do All Dogs Need Multivitamins?</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Not necessarily every dog. A healthy dog on a complete and balanced commercial dog food diet might get all the nutrients they need. However, certain situations make multivitamins highly beneficial:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Puppies:</strong> Growing puppies have high nutritional demands for bone and muscle development.</li>
          <li><strong>Senior Dogs:</strong> Older dogs may have reduced absorption of nutrients and can benefit from supplements to support joint health, cognitive function, and immunity.</li>
          <li><strong>Dogs with Health Issues:</strong> Pets recovering from illness, surgery, or those with chronic conditions might need extra vitamins and minerals to aid healing and manage their condition.</li>
          <li><strong>Homemade Diets:</strong> If you're feeding your dog a homemade diet (which should always be formulated with veterinary guidance), a multivitamin is essential to ensure they receive all necessary nutrients.</li>
          <li><strong>Active Dogs:</strong> Highly active or working dogs may burn more nutrients and could benefit from supplementation to support energy levels and recovery.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">What to Look For in a Pet Multivitamin</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          When choosing a multivitamin, consider products that contain:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Vitamins (A, B-complex, C, D, E, K):</strong> For vision, energy metabolism, immunity, bone health, and antioxidant support.</li>
          <li><strong>Minerals (Calcium, Phosphorus, Iron, Zinc, Copper, Selenium):</strong> Essential for bone strength, oxygen transport, immune function, and various metabolic processes.</li>
          <li><strong>Omega-3 Fatty Acids:</strong> Often included for skin and coat health, and anti-inflammatory properties.</li>
          <li><strong>Probiotics/Prebiotics:</strong> To support digestive health.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Always Consult Your Vet</h3>
        <p className="text-gray-700 leading-relaxed">
          Before adding any supplement to your dog's diet, it's crucial to consult your veterinarian. They can help you determine if a multivitamin is appropriate for your dog's specific needs and recommend the right dosage and brand. Over-supplementation can sometimes be harmful, so professional advice is key.
        </p>
      </>
    ),
  },
  {
    title: "Dog Bandanas - Stylish Dog Bandanas for All Occasions | Zigly",
    image: Tip3,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Who says fashion is just for humans? Dog bandanas are a fun, easy, and affordable way to add a dash of personality and flair to your canine companion's look. Whether it's for a special occasion, a holiday, or just everyday swagger, a bandana is the perfect accessory to make your pup stand out!
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">More Than Just Fashion!</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          While bandanas are undeniably stylish, they can also offer some practical benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Identification:</strong> Brightly colored bandanas can make your dog more visible, especially during walks in low light. Some even have reflective strips!</li>
          <li><strong>Cooling (Wet Bandanas):</strong> On hot days, a damp bandana (especially one made from cooling fabric) tied around your dog's neck can help them stay cooler.</li>
          <li><strong>Hair Control:</strong> For long-haired breeds, a bandana can help keep hair out of their eyes and off their face.</li>
          <li><strong>Protecting Skin:</strong> A bandana can provide a thin layer of protection from the sun's harsh rays on sensitive neck areas.</li>
          <li><strong>Communicating:</strong> A yellow bandana, for instance, can signal that your dog needs space (often used for dogs in training or those who are nervous).</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Choosing the Perfect Bandana</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Material:</strong> Look for breathable, comfortable fabrics like cotton, flannel, or lightweight polyester.</li>
          <li><strong>Size:</strong> Ensure the bandana fits comfortably around your dog's neck without being too tight or too loose. You should be able to fit two fingers underneath.</li>
          <li><strong>Style:</strong> The options are endless! From playful patterns and witty sayings to festive designs for holidays, you'll find a bandana for every mood and event.</li>
          <li><strong>Safety:</strong> Always supervise your dog when they're wearing a bandana, especially if they are prone to chewing or if the bandana has small embellishments.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          <strong>Express Your Dog's Personality!</strong> Dog bandanas are a simple yet effective way to celebrate your dog's unique character. Browse the amazing collection at Vet&Meet and find the perfect bandana to make your furry friend the talk of the dog park!
        </p>
      </>
    ),
  },
  {
    title: "Best Grooming Tools for Your Cat and Dog in 2025",
    image: Tip4,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular grooming isn't just about making your pet look good; it's a vital part of their health and well-being. From maintaining a healthy coat to preventing painful mats and detecting potential health issues early, having the right grooming tools at home is a must. Here are the top grooming tools every pet parent should consider for their cat and dog in 2025:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
          <li className="mb-2"><strong>Brushes & Combs (Tailored to Coat Type):</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Slicker Brushes:</strong> Excellent for removing loose fur and tangles, especially for dogs and cats with medium to long coats.</li>
              <li><strong>Bristle Brushes:</strong> Best for short-haired breeds to remove loose hair and distribute natural oils, leaving a shiny coat.</li>
              <li><strong>Pin Brushes:</strong> Ideal for long, silky, or wiry coats, helping to detangle and remove debris without pulling.</li>
              <li><strong>Deshedding Tools (e.g., Furminator-style):</strong> Designed to reach deep into the undercoat to remove excess shedding fur, significantly reducing hair around the house.</li>
              <li><strong>Fine-toothed Combs:</strong> Essential for cats to check for fleas and remove small mats.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Nail Clippers/Grinders:</strong>
            <ul className="list-disc list-inside ml-6">
              <li><strong>Scissor-style or Guillotine-style Clippers:</strong> Choose the type that feels most comfortable and safe for you. Make sure they are sharp to ensure a clean cut.</li>
              <li><strong>Nail Grinders:</strong> An alternative to clippers, grinders (like Dremels designed for pets) gradually file down the nails, reducing the risk of cutting the quick. Great for anxious pets or those with dark nails.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Shampoos & Conditioners:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Always use pet-specific shampoos and conditioners. Human products can irritate your pet's skin.</li>
              <li>Look for formulations for sensitive skin, shedding control, flea & tick prevention, or coat brightening, depending on your pet's needs.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Ear Cleaners:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>A good quality, vet-approved ear cleaning solution and cotton balls/pads are crucial for preventing ear infections, especially in dogs with floppy ears.</li>
            </ul>
          </li>
          <li className="mb-2"><strong>Dental Care Kit:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>A toothbrush and enzymatic toothpaste designed for pets are essential for maintaining oral hygiene and preventing dental disease. Never use human toothpaste.</li>
            </ul>
          </li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          <strong>Pro Tip:</strong> Introduce grooming tools to your pet gradually and positively, using treats and praise. Regular short grooming sessions are far better than infrequent, long, and stressful ones! If you're unsure about any grooming task, consult a professional groomer or your vet.
        </p>
      </>
    ),
  },
  {
    title: "How to Choose the Right Food for Your Pet’s Age",
    image: Tip5,
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Just like humans, pets have different nutritional needs at various stages of their lives. Feeding your furry friend a diet appropriate for their age is crucial for their growth, energy, and long-term health. Here’s a simple guide to choosing the right food for your pet at every life stage:
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Puppies & Kittens (Birth to 12-18 months, depending on breed):</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Needs:</strong> High protein and fat for rapid growth, essential fatty acids (like DHA) for brain and vision development, and a balanced calcium-to-phosphorus ratio for strong bones.</li>
          <li><strong>Look For:</strong> "Puppy Formula" or "Kitten Formula" on the label. These are specially formulated to support intense growth and development.</li>
          <li><strong>Key:</strong> Smaller kibble sizes for easy chewing.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Adult Pets (1-7 years, depending on breed size):</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Needs:</strong> Balanced nutrition to maintain a healthy weight, muscle mass, and energy levels without excessive calories.</li>
          <li><strong>Look For:</strong> "Adult Maintenance Formula" or "All Life Stages" if it meets AAFCO (Association of American Feed Control Officials) guidelines for adult dogs/cats.</li>
          <li><strong>Key:</strong> Focus on a complete and balanced diet that fits their activity level.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Senior Pets (7+ years, or earlier for large/giant breeds):</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Needs:</strong> Lower calories (to prevent obesity as activity decreases), joint support (glucosamine and chondroitin), higher fiber for digestion, and often easily digestible proteins. Some may benefit from omega-3s for cognitive health.</li>
          <li><strong>Look For:</strong> "Senior Formula" or "Mature Adult Formula." These are designed to address the specific needs of aging pets.</li>
          <li><strong>Key:</strong> Softer kibble or wet food might be preferred if dental issues are present.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Considerations:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Breed Size:</strong> Large breed puppies have different calcium/phosphorus needs than small breed puppies to prevent rapid growth issues.</li>
          <li><strong>Activity Level:</strong> Very active or working dogs may need more calories and protein than sedentary couch potatoes.</li>
          <li><strong>Health Conditions:</strong> Pets with allergies, sensitive stomachs, or specific health issues (e.g., kidney disease, diabetes) will require veterinary-prescribed therapeutic diets.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Always transition your pet's food gradually over 7-10 days to avoid digestive upset.
          Most importantly, consult your veterinarian for personalized advice on the best diet for your pet's unique needs and health status.
        </p>
      </>
    ),
  },
  {
    title: "5 Signs Your Pet Needs a Vet Visit Immediately",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202412/vet-132001148-16x9_0.jpg?VersionId=fNjoETDdYXeM8EWz8u9Ujad6.VZqQW43&size=690:388",
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          As pet parents, we always want the best for our furry family members. Sometimes, it can be hard to tell if your pet's symptoms are minor or signal something more serious. While some issues can wait for a regular check-up, certain signs warrant immediate veterinary attention. Knowing these can be crucial in potentially saving your pet's life or preventing a condition from worsening.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Here are 5 signs that mean it's time to call your vet <em>right now</em>:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
          <li className="mb-2"><strong>Difficulty Breathing:</strong> This is a critical emergency. Signs include excessive panting (when not hot or exercising), struggling to inhale or exhale, noisy breathing, blue-tinged gums, or extended neck while breathing.</li>
          <li className="mb-2"><strong>Severe Vomiting or Diarrhea (Especially with Blood):</strong> Occasional vomiting or soft stool can happen, but frequent, profuse vomiting or diarrhea (especially if it contains blood, is black and tarry, or your pet seems lethargic) can lead to rapid dehydration and be a sign of poisoning, severe infection, or an obstruction.</li>
          <li className="mb-2"><strong>Collapse or Sudden Weakness:</strong> If your pet suddenly can't stand, walks unsteadily, collapses, or is extremely weak and unresponsive, it's an emergency. This could indicate heart problems, neurological issues, severe pain, internal bleeding, or other life-threatening conditions.</li>
          <li className="mb-2"><strong>Excessive Pain or Obvious Injury:</strong> Yelping, limping, hiding, aggression when touched, swollen limbs, or a visible wound (especially deep cuts, severe bleeding, or a suspected broken bone) all require immediate veterinary assessment.</li>
          <li className="mb-2"><strong>Difficulty Urinating or Defecating:</strong> Straining to urinate, frequent attempts to urinate with little or no output, or crying out during urination, especially in male cats, can indicate a life-threatening urinary blockage. Difficulty defecating or straining excessively can also be serious.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          <strong>When in Doubt, Call Your Vet!</strong> This list is not exhaustive. If you are ever concerned about your pet's health, even if you don't see one of these specific signs, it's always best to contact your veterinarian immediately. They can provide guidance over the phone or advise you to bring your pet in for emergency care. Your pet's well-being is paramount!
        </p>
      </>
    ),
  },
];


const ArticleDetailPage = () => { 
  const { title } = useParams(); 

 
  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  // Find the article based on the URL slug
  const article = fullArticlesContent.find(
    (a) => createSlug(a.title) === title
  );

  if (!article) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Article not found!</h2>
        
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Health Tips
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-auto max-h-96 object-cover rounded-lg mb-6"
        />
       
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetailPage;