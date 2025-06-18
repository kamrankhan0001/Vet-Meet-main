
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPet1 from "../assets/Blogs/Blog1.png";
import blogPet2 from "../assets/Blogs/Blog2.png";
import blogPet3 from "../assets/Blogs/Blog3.png";
import blogPet4 from "../assets/Blogs/Blog4.png";
import blogPet5 from "../assets/Blogs/Blog5.png";
import blogPet6 from "../assets/Blogs/Blog6.png";


const fullBlogPostsContent = [
  {
    id: 1,
    title: "The Loyal Golden Retriever: A Family Favorite",
    image: blogPet1,
    description: "Golden Retrievers are known for their friendly and tolerant attitude, making them one of the most popular dog breeds.",
    category: "Dogs",
    date: "June 10, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Golden Retrievers are renowned for their gentle and affectionate nature, making them ideal family pets. Their intelligence and eagerness to please also make them highly trainable, excelling in obedience, agility, and as service dogs.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Temperament & Personality</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          These dogs are typically happy, outgoing, and trustworthy. They get along well with children and other pets, and their patience is often remarkable. While they are friendly, they can also be good watchdogs, barking to alert you to strangers. However, don't expect them to be aggressive guard dogs!
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Care and Exercise</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Golden Retrievers require a good amount of exercise to stay healthy and prevent boredom. Daily walks, runs, or games of fetch are essential. Their beautiful double coat needs regular brushing (2-3 times a week) to prevent mats and reduce shedding. They also love water, so swimming can be a great exercise.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Bringing a Golden Retriever into your home means welcoming a loyal, loving, and energetic companion who will quickly become an irreplaceable part of your family.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "How to Treat Ear Mites in Cats: Easy Tips for Pet Owners",
    image: blogPet2,
    description: "Ear mites are tiny parasites that live in your cat’s ear canal, causing discomfort and infections if left untreated.",
    category: "Cats",
    date: "June 8, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ear mites (Otodectes cynotis) are a common and highly contagious problem in cats, especially kittens. These microscopic parasites live on the surface of the ear canal, feeding on skin debris and ear wax, causing intense itching and irritation.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptoms of Ear Mites</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li>Frequent and vigorous scratching of the ears.</li>
          <li>Head shaking.</li>
          <li>A dark, crumbly discharge resembling coffee grounds in the ear canal.</li>
          <li>Redness, inflammation, or sores around the ears due to scratching.</li>
          <li>Unpleasant odor from the ears.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Diagnosis and Treatment</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you suspect ear mites, it's crucial to visit your veterinarian. They will examine your cat's ears, often using an otoscope, and may take a swab of the discharge to view under a microscope for definitive diagnosis.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Treatment typically involves:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Ear Cleaning:</strong> Your vet will likely clean your cat's ears thoroughly to remove debris and mites.</li>
          <li><strong>Medication:</strong> Prescription ear drops or topical medications containing insecticides are usually prescribed. These need to be administered for several weeks to ensure all life stages of the mites are eliminated.</li>
          <li><strong>Treating All Pets:</strong> Since ear mites are highly contagious, all pets in the household (dogs and cats) should be treated simultaneously, even if they show no symptoms.</li>
          <li><strong>Environmental Cleaning:</strong> Wash pet bedding and vacuum regularly to minimize re-infestation risk.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Never attempt to treat ear mites with home remedies without veterinary guidance, as this can worsen the condition or harm your cat.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Symptoms and Causes of Chronic Kidney Disease in Dogs",
    image: blogPet3,
    description: "Chronic Kidney Disease (CKD) is a common condition in older dogs, leading to gradual loss of kidney function over time.",
    category: "Dogs", // Corrected category as the title is dog-related
    date: "June 5, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Chronic Kidney Disease (CKD), also known as Chronic Renal Failure (CRF), is a progressive and irreversible condition where the kidneys gradually lose their ability to filter waste products from the blood. It's particularly prevalent in senior dogs.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Causes of CKD in Dogs</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          While the exact cause of CKD is often unknown (idiopathic), common contributing factors include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Age:</strong> Kidney function naturally declines with age.</li>
          <li><strong>Breed Predisposition:</strong> Certain breeds (e.g., Cocker Spaniels, German Shepherds, Bull Terriers) are more prone.</li>
          <li><strong>Infections:</strong> Chronic bacterial infections of the kidneys or urinary tract.</li>
          <li><strong>Toxins:</strong> Ingestion of certain toxins (e.g., antifreeze, some human medications, certain plants).</li>
          <li><strong>Dental Disease:</strong> Bacteria from severe dental disease can travel to the kidneys.</li>
          <li><strong>High Blood Pressure:</strong> Can damage kidney blood vessels over time.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Common Symptoms</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Symptoms often appear gradually and can be subtle in the early stages:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Increased Thirst (Polydipsia) and Urination (Polyuria):</strong> One of the earliest and most common signs.</li>
          <li><strong>Loss of Appetite and Weight Loss:</strong> Due to nausea and reduced filtration of toxins.</li>
          <li><strong>Lethargy and Weakness:</strong> Build-up of toxins affects energy levels.</li>
          <li><strong>Vomiting and Diarrhea:</strong> As toxins accumulate in the bloodstream.</li>
          <li><strong>Bad Breath (Uremic Halitosis):</strong> Due to waste products in the blood.</li>
          <li><strong>Pale Gums:</strong> Can indicate anemia, a common complication.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If you notice any of these signs, especially in an older dog, consult your veterinarian immediately. Early diagnosis and management can significantly improve your dog's quality of life and extend their lifespan.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "How to Apply Spot On Treatment to a Dog?",
    image: blogPet4,
    description: "Applying spot-on treatment is a common method to protect your dog from fleas, ticks, and other parasites.",
    category: "Dogs", 
    date: "June 2, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Spot-on treatments are topical medications applied to your dog's skin, typically between the shoulder blades. They are absorbed into the skin's oil glands and then released over time, protecting your dog from various parasites like fleas, ticks, and sometimes even mosquitoes and internal parasites. Proper application is key for effectiveness.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Step-by-Step Application Guide:</h3>
        <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
          <li className="mb-2">
            <strong>Choose the Right Product:</strong> Always use a spot-on treatment specifically designed for dogs, based on their weight and age. Never use cat products on dogs or vice versa, as ingredients can be toxic across species.
          </li>
          <li className="mb-2">
            <strong>Read Instructions Carefully:</strong> Each product may have slightly different instructions. Read the packaging thoroughly before you begin.
          </li>
          <li className="mb-2">
            <strong>Prepare Your Dog:</strong> Ensure your dog is dry. Do not bathe your dog immediately before or after application (check product specific guidelines, usually 24-48 hours).
          </li>
          <li className="mb-2">
            <strong>Part the Fur:</strong> Hold the applicator upright and part your dog's fur between the shoulder blades at the base of the neck until you can clearly see the skin. This area is chosen because it's difficult for your dog to lick.
          </li>
          <li className="mb-2">
            <strong>Apply Directly to Skin:</strong> Place the tip of the applicator directly on the skin. Squeeze the tube firmly to apply all of the liquid in one or two spots along the part in the fur. Do not apply it to the fur itself, as it won't be absorbed effectively.
          </li>
          <li className="mb-2">
            <strong>Prevent Licking:</strong> Prevent your dog from licking the application site until it is completely dry. An Elizabethan collar (cone) may be necessary for some dogs. If you have multiple pets, keep them separated until the treated pet is dry to prevent them from licking each other.
          </li>
          <li className="mb-2">
            <strong>Wash Hands:</strong> Always wash your hands thoroughly with soap and water after applying the treatment.
          </li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          Consistency is vital! Apply the treatment according to the recommended schedule (usually monthly) to ensure continuous protection. If you have any doubts, consult your veterinarian.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Cat Vomiting: What You Need to Know to Help Your Cat",
    image: blogPet5,
    description: "Cat vomiting can be a common issue, but it can also indicate underlying health problems that need attention.",
    category: "Cats", 
    date: "May 29, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vomiting is a common occurrence in cats, and while it can sometimes be harmless (like a hairball), it can also be a symptom of a more serious underlying health issue. Understanding when to be concerned and what to look for can help you decide when to seek veterinary care.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Common Causes of Cat Vomiting:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Hairballs:</strong> The most common cause, especially in long-haired cats.</li>
          <li><strong>Eating Too Fast:</strong> Ingesting food too quickly can lead to regurgitation rather than true vomiting.</li>
          <li><strong>Dietary Indiscretion:</strong> Eating spoiled food, plants, or foreign objects.</li>
          <li><strong>Food Allergies or Sensitivities:</strong> Reactions to certain ingredients in their diet.</li>
          <li><strong>Parasites:</strong> Intestinal worms can cause vomiting.</li>
          <li><strong>Infections:</strong> Bacterial or viral infections of the digestive tract.</li>
          <li><strong>Inflammatory Bowel Disease (IBD):</strong> Chronic inflammation of the digestive tract.</li>
          <li><strong>Kidney or Liver Disease:</strong> Toxins building up can cause nausea.</li>
          <li><strong>Pancreatitis:</strong> Inflammation of the pancreas.</li>
          <li><strong>Hyperthyroidism:</strong> An overactive thyroid gland, common in older cats.</li>
          <li><strong>Poisons/Toxins:</strong> Ingestion of harmful substances.</li>
          <li><strong>Obstruction:</strong> A foreign body (like string or a toy) lodged in the digestive tract.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">When to Worry and See the Vet:</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          While occasional hairballs are normal, seek immediate veterinary attention if your cat exhibits any of these signs:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Frequent or Projectile Vomiting:</strong> Vomiting multiple times a day or with great force.</li>
          <li><strong>Vomiting Blood:</strong> Red streaks or "coffee grounds" appearance.</li>
          <li><strong>Lethargy, Weakness, or Collapse:</strong> Significant change in energy levels.</li>
          <li><strong>Diarrhea (especially with blood) concurrent with vomiting.</strong></li>
          <li><strong>Loss of Appetite for more than 24 hours.</strong></li>
          <li><strong>Abdominal Pain or Swelling.</strong></li>
          <li><strong>Repeated attempts to vomit without producing anything.</strong></li>
          <li><strong>Known ingestion of a foreign object or toxin.</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          If your cat is vomiting, observe them closely. Provide fresh water to prevent dehydration. If symptoms persist or worsen, contact your veterinarian immediately for proper diagnosis and treatment.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Surviving Parvo: A Guide To Helping Your Dog Recover",
    image: blogPet6,
    description: "Parvovirus is a highly contagious virus that can be deadly for dogs, especially puppies. Early detection and treatment are crucial.",
    category: "Dogs", 
    date: "May 25, 2025",
    fullContent: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Canine parvovirus (CPV), often simply called "Parvo," is a highly contagious and severe viral disease that attacks the rapidly dividing cells in a dog's body, primarily in the intestinal lining and bone marrow. Puppies and unvaccinated dogs are most vulnerable. While it can be deadly, with aggressive veterinary care, many dogs can recover.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptoms of Parvovirus:</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Symptoms usually appear within 5-10 days of exposure and can worsen rapidly:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Severe, Bloody Diarrhea:</strong> Often has a distinct, foul odor.</li>
          <li><strong>Vomiting:</strong> Frequent and profuse, leading to rapid dehydration.</li>
          <li><strong>Lethargy and Weakness:</strong> Dogs become extremely tired and unresponsive.</li>
          <li><strong>Loss of Appetite:</strong> Refusal to eat or drink.</li>
          <li><strong>Fever or Low Body Temperature.</strong></li>
          <li><strong>Abdominal Pain.</strong></li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Treatment and Recovery:</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          There is no direct cure for parvovirus; treatment focuses on supportive care to help the dog's immune system fight the virus. This almost always requires hospitalization and intensive care:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
          <li><strong>Intravenous (IV) Fluids:</strong> Essential to combat dehydration caused by vomiting and diarrhea.</li>
          <li><strong>Anti-Nausea Medications:</strong> To control vomiting and allow the dog to retain fluids.</li>
          <li><strong>Antibiotics:</strong> To prevent secondary bacterial infections, as the virus weakens the immune system.</li>
          <li><strong>Pain Management:</strong> To keep the dog comfortable.</li>
          <li><strong>Nutritional Support:</strong> Once vomiting is controlled, small, frequent meals or liquid nutrition may be given.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Preventing Parvo:</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The best defense against Parvovirus is vaccination. Ensure your puppy completes its full series of vaccinations on schedule and maintains booster shots as an adult. Avoid exposing unvaccinated puppies to public areas where other dogs frequent.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If you suspect your dog has Parvo, contact your veterinarian immediately. Early and aggressive treatment offers the best chance of survival.
        </p>
      </>
    ),
  },
];


const BlogPostDetailPage = () => {
  const { id } = useParams(); 
  const post = fullBlogPostsContent.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Blog Post not found!</h2>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          {post.category} | {post.date}
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto max-h-96 object-cover rounded-lg mb-6"
        />
      
        {post.fullContent}
      </div>
    </div>
  );
};

export default BlogPostDetailPage;