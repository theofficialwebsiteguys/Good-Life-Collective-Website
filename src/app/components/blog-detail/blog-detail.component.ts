import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: any;

  blogs = [
    {
      id: '1',
      title: 'Navigating Cannabis Dispensaries in NYC: Legal vs. Illicit (And Why Support for Legal Ones Matters)',
      image: 'assets/blog1.jpg',
      content: `
        <p>In recent years, the landscape of cannabis distribution in New York City has undergone significant changes. With the legalization of recreational marijuana, the city has seen a surge in both legal and illicit dispensaries. However, understanding the differences between the two and advocating for legal dispensaries can have far-reaching benefits for the community. In this post, we'll delve into the disparities between legal and illicit cannabis dispensaries in NYC and explore why supporting legal ones is crucial.</p>
        <h3>Regulatory Oversight and Safety Measures</h3>
        <p>One of the primary distinctions between legal and illicit dispensaries lies in regulatory oversight and adherence to safety measures. Legal dispensaries operate within a framework of stringent regulations imposed by state and local authorities. These regulations encompass various aspects, including quality control, testing procedures, labeling requirements, and employee training.</p>
        <br>
        <p>On the contrary, illicit dispensaries operate outside the bounds of legality and often bypass essential safety protocols. Products sold in these establishments may not undergo rigorous testing for potency, contaminants, or pesticides, posing potential health risks to consumers. By patronizing legal dispensaries, individuals can have greater confidence in the safety and quality of the products they purchase.</p>
        <br>
        <h3>Contribution to Tax Revenue and Local Economy</h3>
        <p>Another compelling reason to support legal cannabis dispensaries is their contribution to tax revenue and the local economy. Legal dispensaries generate substantial tax revenues through sales taxes, excise taxes, and licensing fees. In New York City, a portion of these tax revenues is allocated towards community development initiatives, public health programs, education, and infrastructure improvements.</p>
        <br>
        <p>For instance, Good Life Collective Dispensers contributes approximately 4% of our tax revenue directly back into the local neighborhood. This influx of funds can have a transformative impact on communities, supporting initiatives such as youth education, substance abuse prevention, job training programs, and small business development. By choosing legal dispensaries, consumers actively participate in bolstering their neighborhoods and fostering positive social change.</p>
        <h3>Supporting Legalization Efforts and Social Equity</h3>
        <p>Furthermore, supporting legal cannabis dispensaries aligns with broader efforts towards cannabis legalization and social equity. The legalization of cannabis represents a shift towards more progressive drug policies, emphasizing harm reduction, criminal justice reform, and equitable access to cannabis-related opportunities.</p>
        <br>
        <p>Legal dispensaries often prioritize diversity and inclusion in their hiring practices, providing employment opportunities to individuals from marginalized communities disproportionately affected by the war on drugs. Additionally, many legal dispensaries actively engage in community outreach, education, and advocacy initiatives aimed at promoting responsible cannabis use and dismantling stigma.</p>
        <br>
        <p>By supporting legal dispensaries, consumers contribute to the normalization of cannabis and the advancement of social equity objectives, ultimately fostering a more inclusive and just society.</p>
        <h3>In Conclusion</h3>
        <p>The differences between legal and illicit cannabis dispensaries in NYC are profound, spanning regulatory compliance, safety standards, economic impact, and social equity considerations. While illicit dispensaries may offer seemingly convenient alternatives, their operation undermines public health, safety, and community development efforts.</p>
        <br>
        <p>By actively choosing legal dispensaries, individuals can prioritize safety, support local economies, and advocate for progressive drug policies. Moreover, through their patronage, consumers play a pivotal role in shaping the future of cannabis regulation and advancing social justice initiatives.</p>
        <br>
        <p>In essence, supporting legal dispensaries isn't just about accessing high-quality products—it's about investing in the well-being of communities and fostering positive change on both local and societal scales.</p>
        `
    },
    {
      id: '2',
      title: 'Exploring the Science of Cannabis: Understanding THC, CBD, and Beyond',
      image: 'assets/blog2.jpg',
      content: `
       <p>Unlocking the mysteries of cannabis entails delving deep into its scientific underpinnings. In this illuminating blog post, we embark on a journey through the intricate world of cannabis science, shedding light on the remarkable compounds that make this plant so exceptional. Whether you're a seasoned cannabis enthusiast or a newcomer to the scene, understanding the science behind cannabinoids can deepen your appreciation for the plant's myriad benefits.</p>
        <h3>Diving into the Science</h3>
        <h4>The Difference between THC and CBD:</h4>
        <p>Cannabis contains over 100 different cannabinoids, but two of the most well-known are THC (tetrahydrocannabinol) and CBD (cannabidiol). While THC is primarily responsible for the plant's psychoactive effects, CBD is non-intoxicating and renowned for its potential therapeutic properties.</p>
        <h4>How THC and CBD Interact with the Body:</h4>
        <p>Both THC and CBD interact with the body's endocannabinoid system, a complex network of receptors and neurotransmitters that regulate various physiological functions. THC binds to CB1 receptors, primarily found in the brain and central nervous system, producing euphoria and altering perception. CBD, on the other hand, modulates the endocannabinoid system indirectly, exerting a range of effects that may include pain relief, anxiety reduction, and anti-inflammatory properties.</p>
        <h4>The Potential Health Benefits of Cannabis Compounds:</h4>
        <p>Research suggests that cannabinoids like THC and CBD may offer a multitude of health benefits, ranging from pain management and stress relief to neuroprotective effects and anti-cancer properties. CBD, in particular, has garnered attention for its potential in treating conditions such as epilepsy, anxiety disorders, and chronic pain.</p>
        <h4>Emerging Research and Developments:</h4>
        <p>The field of cannabis science is rapidly evolving, with new discoveries and innovations emerging at a staggering pace. Researchers are exploring novel cannabinoid formulations, innovative delivery methods, and the potential synergistic effects of combining multiple cannabinoids and terpenes.</p>
        <h4>Unique Effects of Different Strains and Products:</h4>
        <p>Not all cannabis strains are created equal, and the composition of cannabinoids and terpenes can vary widely between cultivars. Sativa strains are often associated with uplifting, cerebral effects, while indica strains tend to induce relaxation and sedation. Additionally, different consumption methods, such as smoking, vaping, or ingesting edibles, can result in distinct effects due to variations in bioavailability and metabolism.</p>
        <h3>In Conclusion</h3>
        <p>As we unravel the intricate science of cannabis, it becomes clear that this remarkable plant holds immense promise for both recreational and medicinal purposes. Whether you're intrigued by the psychoactive properties of THC, the therapeutic potential of CBD, or the synergistic effects of combining multiple cannabinoids, understanding the science behind cannabis can open doors to a deeper appreciation of its profound benefits. Stay informed, stay curious, and continue exploring the boundless possibilities that cannabis science has to offer.</p>

        `
    },
    {
      id: '3',
      title: 'The Ultimate Guide to Cannabis Products: Flower, Edibles, Vapes, and More',
      image: 'assets/blog3.jpg',
      content: `
      <p>Navigating the world of cannabis products can feel like embarking on a journey through a vast and ever-expanding landscape. With an array of options available, from classic flower to cutting-edge edibles and vapes, it's essential to have a guide to help you find your way. In this comprehensive blog post, we'll take you through everything you need to know about cannabis products, including their unique properties, effects, and how to choose the right one for your needs.</p>
      <h3>Types of Cannabis Products</h3>
      <h4>Flower:</h4>
      <p>Cannabis flower, also known as bud or marijuana, is the most traditional form of cannabis consumption. Available in a variety of strains, each with its own unique combination of cannabinoids and terpenes, flower can be smoked, vaporized, or used to make edibles and extracts.</p>
      <h4>Edibles:</h4>
      <p>Cannabis-infused edibles offer a delicious and discreet way to consume cannabis. From gummies and chocolates to baked goods and beverages, the options are endless. Edibles can provide long-lasting effects that are typically more potent than smoking or vaping, making them a popular choice for those seeking sustained relief.</p>
      <h4>Vapes:</h4>
      <p>Vaporizing cannabis involves heating the flower or concentrate to a temperature that releases cannabinoids and terpenes without combustion. Vaping is often considered a healthier alternative to smoking, as it produces fewer harmful byproducts. Vape pens and cartridges are convenient and discreet, making them ideal for on-the-go consumption.</p>
      <h4>Tinctures:</h4>
      <p>Cannabis tinctures are liquid extracts made by soaking cannabis flower or concentrate in alcohol or glycerin. Tinctures are administered sublingually, meaning they're placed under the tongue for rapid absorption into the bloodstream. They offer precise dosing and are a popular choice for medical users seeking consistent relief.</p>
      <h4>Topicals:</h4>
      <p>Cannabis-infused topicals come in various forms, including lotions, balms, and patches, and are applied directly to the skin. These products are designed to provide localized relief from pain, inflammation, and skin conditions without producing psychoactive effects. Topicals are an excellent option for those looking for targeted relief without the intoxicating effects of other consumption methods.</p>
      <h3>Choosing the Right Product</h3>
      <p>When selecting a cannabis product, it's essential to consider your personal preferences, desired effects, and experience level. Factors such as cannabinoid content, terpene profile, and dosage can all influence the overall experience. Start with low doses and gradually increase until you find the right balance for you.</p>
      <h3>Responsible Consumption and Dosing</h3>
      <p>Responsible cannabis consumption is key to maximizing the benefits while minimizing the risks. Start with low doses, especially if you're new to cannabis or trying a new product for the first time. Remember to wait at least two hours before consuming more, as the effects can take time to fully manifest.</p>
      <h3>Trends and Innovations</h3>
      <p>The cannabis industry is constantly evolving, with new products and innovations emerging regularly. From high-potency concentrates to terpene-rich extracts and CBD-infused wellness products, there's always something new to explore. Stay informed about the latest trends and developments to make the most of your cannabis experience.</p>

        `
    },
    {
      id: '4',
      title: 'Nurturing Minds: Exploring the Relationship Between Cannabis and Mental Health',
      image: 'assets/blog4.jpg',
      content: `
     <p>The relationship between cannabis and mental health has been a topic of debate and research for years. While cannabis has been praised for its potential benefits in managing anxiety, stress, and even depression, there are also concerns about its effects on mental well-being. In this blog, we explore the complex connection between cannabis and mental health, examining both the potential benefits and the considerations for responsible use.</p>

      <h3>How Cannabis Interacts with Mental Health</h3>
      <h4>Reducing Anxiety and Stress:</h4>
      <p>Cannabis, particularly strains high in CBD, has been widely recognized for its potential to reduce stress and anxiety. CBD interacts with receptors in the brain that regulate mood and stress responses, helping users feel more relaxed without the intoxicating effects of THC.</p>

      <h4>Potential Benefits for Depression:</h4>
      <p>Some studies suggest that cannabis, especially in low doses, can help elevate mood and provide relief for individuals experiencing symptoms of depression. THC stimulates the release of dopamine, the brain’s ‘feel-good’ chemical, which can temporarily enhance mood and motivation.</p>

      <h4>Managing PTSD and Trauma:</h4>
      <p>Many individuals who suffer from post-traumatic stress disorder (PTSD) have turned to cannabis for relief. Research has indicated that cannabinoids can help regulate emotional responses and reduce hyperarousal symptoms associated with PTSD.</p>

      <h3>Understanding the Risks</h3>
      <h4>Potential for Increased Anxiety:</h4>
      <p>While cannabis can help some users relax, high doses of THC may actually increase anxiety or induce paranoia. Individual tolerance, strain selection, and dosage play a crucial role in how cannabis affects each person.</p>

      <h4>The Link Between Cannabis and Psychosis:</h4>
      <p>There is some evidence that high-THC cannabis use, particularly in individuals with a predisposition to schizophrenia or other psychiatric disorders, may increase the risk of psychotic episodes. It’s important for those with a history of mental health conditions to consult a professional before using cannabis.</p>

      <h4>Dependence and Overuse:</h4>
      <p>While cannabis is not as addictive as many other substances, excessive use can lead to dependence, impacting daily life, motivation, and overall mental health. Responsible use and moderation are key.</p>

      <h3>Finding Balance</h3>
      <p>Understanding the relationship between cannabis and mental health requires a personalized approach. Factors such as strain selection, cannabinoid ratios, and individual body chemistry all contribute to how cannabis interacts with the mind. By staying informed, using responsibly, and seeking professional advice when needed, individuals can make the most of cannabis while prioritizing their mental well-being.</p>

        `
    },
    {
      id: '5',
      title: 'Elevated Dining: Mastering Cannabis-Infused Recipes at Home',
      image: 'assets/blog5.jpg',
      content: `
    <p>Cooking with cannabis has become an exciting and creative way to enjoy its benefits while indulging in delicious meals. Whether you're a seasoned chef or new to cannabis-infused cuisine, this guide will walk you through the basics of making cannabis edibles and mastering the art of infused cooking.</p>

    <h3>Getting Started with Cannabis-Infused Cooking</h3>
    <h4>Understanding Decarboxylation:</h4>
    <p>Before adding cannabis to any recipe, it must undergo a process called decarboxylation. This involves heating the cannabis to activate THC or CBD, making it bioavailable for ingestion. Simply baking ground cannabis at 220°F (104°C) for 30-40 minutes ensures its potency in edibles.</p>

    <h4>Choosing the Right Strain:</h4>
    <p>The effects of your edibles depend on the strain you use. Indica strains create a relaxing effect, while sativa strains provide an energizing boost. Hybrid strains offer a balance of both.</p>

    <h4>Making Cannabis-Infused Butter or Oil:</h4>
    <p>Infused butter or oil is a fundamental ingredient for cannabis edibles. To make it, slow-cook decarboxylated cannabis in butter or coconut oil over low heat for several hours. Strain out the plant material, and you have a potent base for a variety of recipes.</p>

    <h3>Delicious Cannabis-Infused Recipes</h3>
    <h4>Cannabis-Infused Brownies:</h4>
    <p>A classic favorite, cannabis brownies are easy to make. Simply substitute regular butter with cannabis-infused butter in your favorite brownie recipe for a rich and euphoric treat.</p>

    <h4>THC-Infused Pasta Sauce:</h4>
    <p>Infuse olive oil with cannabis and use it to create a delicious pasta sauce. Pair with fresh ingredients like tomatoes, garlic, and basil for a gourmet cannabis dining experience.</p>

    <h4>Cannabis-Infused Smoothies:</h4>
    <p>For a refreshing twist, add a few drops of cannabis tincture to a smoothie made with fruits, yogurt, and honey. It's a great way to enjoy cannabis without the need for cooking.</p>

    <h3>Safe Dosing and Responsible Consumption</h3>
    <p>When making cannabis edibles, it's crucial to start with low doses and wait at least two hours before consuming more. Edibles take longer to kick in but often produce stronger and longer-lasting effects compared to smoking or vaping.</p>

    <h3>Final Thoughts</h3>
    <p>Cooking with cannabis opens up a world of creativity and enjoyment. By mastering the basics of infused cooking, experimenting with recipes, and dosing responsibly, you can enhance your culinary experiences while enjoying the benefits of cannabis in a flavorful way.</p>

        `
    },
    {
      id: '6',
      title: 'Navigating the Green Frontier: A Beginner’s Guide to Cannabis',
      image: 'assets/blog6.jpg',
      content: `<p>As cannabis continues to gain legal acceptance, many newcomers are eager to explore its potential. Whether you’re curious about its medicinal benefits, recreational use, or legal landscape, this beginner’s guide will help you navigate the green frontier with confidence.</p>

          <h3>Understanding Cannabis Basics</h3>
          <h4>What is Cannabis?</h4>
          <p>Cannabis is a plant known for its psychoactive and medicinal properties. It contains compounds called cannabinoids, with THC and CBD being the most well-known.</p>

          <h4>Different Ways to Consume:</h4>
          <ul>
          <li><b>Smoking:</b> The most traditional method, offering fast-acting effects.</li>
          <li><b>Vaping:</b> A cleaner alternative to smoking with fewer harmful byproducts.</li>
          <li><b>Edibles:</b> Long-lasting and potent, edibles require careful dosing.</li>
          <li><b>Topicals:</b> Used for localized pain relief without psychoactive effects.</li>
          </ul>

          <h3>The Importance of Choosing the Right Product</h3>
          <p>Every person reacts differently to cannabis. Beginners should start with products that have a balanced THC-to-CBD ratio to ease into the experience. Low-dose edibles and vape pens with mild effects are great starting points.</p>

          <h3>Legal and Responsible Use</h3>
          <p>Understanding local cannabis laws is essential before purchasing or consuming. Always consume responsibly, be aware of dosage, and avoid operating vehicles while under the influence.</p>

          <h3>Final Thoughts</h3>
          <p>Exploring cannabis can be an exciting journey when approached with the right knowledge. Whether for relaxation, wellness, or recreational enjoyment, taking the time to educate yourself ensures a positive and safe experience.</p>

        `
    },
    {
      id: '7',
      title: 'A Brief History of Cannabis Legalization',
      image: 'assets/blog7.jpg',
      content: `<p>The legalization of cannabis has been a long and complex journey, shaped by cultural shifts, political debates, and scientific discoveries. From ancient medicinal use to modern-day dispensaries, the evolving legal status of cannabis reflects changing attitudes and growing recognition of its benefits. In this post, we explore the history of cannabis legalization and how we arrived at the current landscape.</p>

      <h3>Early Uses of Cannabis</h3>
      <h4>Ancient Medicine and Rituals:</h4>
      <p>Cannabis has been used for thousands of years for medicinal, spiritual, and industrial purposes. Ancient civilizations in China, Egypt, and India documented its use for pain relief, relaxation, and religious ceremonies.</p>

      <h4>The Rise of Hemp in Industry:</h4>
      <p>In colonial America, hemp (a variety of cannabis) was widely cultivated for textiles, rope, and paper. Even the U.S. Founding Fathers grew hemp, recognizing its value as a sustainable crop.</p>

      <h3>The Prohibition Era</h3>
      <h4>Early 20th Century Crackdowns:</h4>
      <p>In the early 1900s, increasing anti-cannabis sentiment led to prohibition in the United States. The Marihuana Tax Act of 1937 effectively criminalized cannabis, fueled by misinformation and racial prejudices.</p>

      <h4>The War on Drugs:</h4>
      <p>In the 1970s, President Richard Nixon launched the War on Drugs, classifying cannabis as a Schedule I substance—meaning it was considered to have no medical value and a high potential for abuse. This led to decades of harsh penalties and mass incarceration for cannabis-related offenses.</p>

      <h3>The Road to Legalization</h3>
      <h4>The Medical Cannabis Movement:</h4>
      <p>Public perception began shifting in the 1990s as scientific studies highlighted cannabis's medical benefits. California became the first U.S. state to legalize medical cannabis in 1996 with the passage of Proposition 215.</p>

      <h4>Recreational Legalization Gains Momentum:</h4>
      <p>Following the success of medical programs, several states began legalizing recreational cannabis. Colorado and Washington led the way in 2012, paving the path for nationwide reforms.</p>

      <h3>The Current Landscape</h3>
      <h4>Federal vs. State Laws:</h4>
      <p>While cannabis remains federally illegal in the U.S., many states have legalized it for medical and recreational use. Countries like Canada, Uruguay, and parts of Europe have also embraced legalization.</p>

      <h4>Social Equity and Expungement Efforts:</h4>
      <p>Many cannabis laws now include provisions to address the racial disparities caused by prohibition. Some states have expunged past cannabis-related convictions, providing new opportunities for those affected.</p>

      <h3>The Future of Cannabis Legalization</h3>
      <p>With growing support for legalization and ongoing research into cannabis’s benefits, the future looks promising. Federal legalization remains a topic of debate, but as more states embrace reform, nationwide change may not be far off.</p>

      <h3>Final Thoughts</h3>
      <p>The journey of cannabis legalization is far from over, but significant progress has been made. By understanding the history of cannabis laws, we can appreciate how far we’ve come and continue advocating for fair, informed policies.</p>

        `
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const blogId = params.get('id');
      this.blog = this.blogs.find(b => b.id === blogId);
    });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }
}
