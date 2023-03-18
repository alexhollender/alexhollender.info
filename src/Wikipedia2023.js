import { Link } from "react-router-dom";
import TableRow from "./TableRow";
import { prototypes } from "./prototypesList.js"
import './scss/Wikipedia2023.scss';
import dell from './media/wiki2023/dell-wiki.jpg';
import monobook from './media/wiki2023/04-19.gif';
import largerScreens from './media/wiki2023/largerscreens-wiki.jpg'
import languages from './media/wiki2023/languages.jpg';
import needs from './media/wiki2023/needs.jpg';
import analogy from './media/wiki2023/reading-editing.jpg';
import wireframe from './media/wiki2023/wireframe.jpg';
import prototypeMp4 from './media/wiki2023/prototype.mp4';
import prototypeWebm from './media/wiki2023/prototype.webm';
import visualDesign from './media/wiki2023/visuals.jpg';
import contentSeparationMp4 from './media/wiki2023/content-separation.mp4';
import contentSeparationWebM from './media/wiki2023/content-separation.webm';
import surfing from './media/wiki2023/surfing.jpg';
import paris from './media/wiki2023/paris.jpg';
import community from './media/wiki2023/community.jpg';

function Wikipedia2023() {
  return (
    <>
      <header className="mini">
        <Link to="/">← Home</Link>
      </header>
      <div id="project-content" className="single-col">
        <section>
          <h1>Design notes on the 2023 Wikipedia redesign</h1>
          <p>Hey, I’m Alex Hollender. For the past few years I led the redesign of the Wikipedia desktop interface, which launched this past January. Below are some notes on the project and process.</p>
        </section>

        <section>
          <h2>2004–2019</h2>
          <p>We have to go back in time a little to properly frame this story. Back to 2004, which was the last time Wikipedia's interface changed significantly. Mark Zuckerberg had just launched TheFacebook, Gmail had just come out, and there were no smartphones (the first iPhone would come out 3 years later). Also CSS was much more limited, so websites were more simple. Two popular computers were Dell’s <i>Dimension 2400 desktop</i>, and their <i>Latitude D505 laptop</i>. For almost everyone using it, Wikipedia looked like this:</p>

          <img src={dell} />

          <p>In 2010, a bunch of changes were made to increase the usability of Wikipedia for new editors (<a href="https://usability.wikimedia.org/wiki/Wikipedia_Usability_Initiative" target="_blank">notes</a>), and in 2015 the editing experience was again significantly improved with the introduction of the <a href="https://www.mediawiki.org/wiki/VisualEditor" target="_blank">Visual Editor</a>. However, the general layout, and specifically the reading experience, stayed largely the same between the 2004 update, and 2019, where my team’s involvement begins (the <a href="https://www.mediawiki.org/wiki/Reading/Web" target="_blank">Readers Web Team</a> at the Wikimedia Foundation — an organization of paid staff members who work on things like the Wikipedia apps, search, languages & translations, editing software, community wishlist, machine learning, and more).</p>

          <img src={monobook} />

          <p>However computers changed a lot between 2004 and 2019. Namely, screens got a lot smaller, and a lot larger. And while our team had built a mobile site to accommodate smaller screens, we hadn’t really done anything to improve the website for the growing desktop and laptop screens:</p>
          
          <img src={largerScreens} />

          <p>In other words, Wikipedia — a major, legacy website (top 10 ranked, for 10+ years) — had an interface that hadn’t been changed for 15 years. And then one day the Chief Product Officer came to our team (1 product manager, ~6 engineers, 1 quality assurance person, ½ a scrum master, ½ a data analyst, ½ a community liaison, and myself), and tasked us with making significant improvements. It might honestly be a once-in-the-history-of-the-internet kind of situation. Exciting, but rather difficult.</p>

          <p>There wasn't one specific reason why, in 2019, this all came about (though there is arguably one person who got the ball rolling — sup Nirzar). Instead there were a variety of reasons: the line length had no limit, the search box was small and in an unfamiliar place, the table of contents was only available at the top of the page, language switching was hidden, the hierarchy and organization of elements was confusing to some, the front-end was brittle, it was becoming difficult to find places for new features, etc. But perhaps above all was the fact that we had been neglecting the interface (due to other priorities, and limited resources), and we felt confident that if we gave it some overdue attention we could make it better for both reader and editors.</p>

          <p>Meanwhile, between 2004 and 2019, the Wikipedia volunteer community had been busy making localized improvements to specific versions of Wikipedia. This is possible because Wikipedia is a democratically run, open-source website, with an interface (and back-end) that can be changed by anyone. And change it they do. But while these changes were real improvements, the majority of them were geared towards logged-in editors. Also the improvements had not been centralized, so they weren’t available on most Wikipedias. A slight tangent: unbeknownst to many people, the many versions of Wikipedia are not centralized. The Wikipedia you read (whether it’s <a href="https://en.wikipedia.org/wiki/Billie_Holiday" target="_blank">English</a>, <a href="https://bn.wikipedia.org/wiki/%E0%A6%A8%E0%A7%87%E0%A6%AA%E0%A6%9A%E0%A7%81%E0%A6%A8_%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%B9" target="_blank">Bangla</a>, <a href="https://te.wikipedia.org/wiki/%E0%B0%95%E0%B1%8D%E0%B0%B0%E0%B0%BF%E0%B0%95%E0%B1%86%E0%B0%9F%E0%B1%8D" target="_blank">Telugu</a>, <a href="https://ky.wikipedia.org/wiki/%D0%9A%D0%B8%D1%88%D0%B8" target="_blank">Kyrgyz</a>, <a href="https://ko.wikipedia.org/wiki/%EB%B8%8C%EB%A6%AC%ED%8A%B8%EB%8B%88_%EC%8A%A4%ED%94%BC%EC%96%B4%EC%8A%A4" target="_blank">Korean</a>, <a href="https://fa.wikipedia.org/wiki/%D8%AA%D9%87%E2%80%8C%D8%AF%DB%8C%DA%AF" target="_blank">Persian</a>, or any of the <a href="https://meta.wikimedia.org/wiki/List_of_Wikipedias#All_Wikipedias_ordered_by_number_of_articles" target="_blank">300 others</a>), is actually a separate website from all of the other Wikipedias that exist. Sure they share a lot of code, use the same servers, and generally have the same interface. But changes volunteers make to the interface (and the content too, of course) are made locally. This meant that the improvement Korean Wikipedia made to have a collapsible sidebar didn’t carry over to English Wikipedia (or anywhere else), the changes Hebrew Wikipedia made to have a sticky header didn’t carry over to Burmese Wikipedia, and on and on.</p>
          
          <p>Sometimes the lack of centralization makes sense: for example, the language variant switcher on Serbian and Chinese, aren’t needed on other Wikipedias. But overall, the lack of centralization meant that a bunch of good interface changes between 2004 and 2019 were localized to smaller Wikipedias, and the majority of Wikipedia readers were not benefitting from them. Like anything else, there are pros and cons to decentralization.</p>

          <img src={languages} />

          <p>Before we go any further let’s pause and think about the situation our team was in. The general layout for readers hadn’t changed much since 2004, but the interface (or interfaces) had changed in hundreds of little, decentralized ways, spread across 300 different language versions of Wikipedia, that were each democratically controlled by their own community of volunteers. And we, a team of ~12 people, wanted to make a bunch of centralized changes to it. Also we didn’t (and still don’t) have comprehensive and detailed analytics for the interface, so we didn’t have much data about how people were using it. Neither did/do we have the ability to easily run A/B tests with logged-out people. The sheer task of learning about all of the different local modifications of Wikipedias across various languages was daunting. Let alone deeply engaging with thousands of volunteers spread across these communities to learn more about their workflows, and why they had made certain modifications. While ultimately being beholden to the democratic system, within which we had to represent the needs of the billions of readers who are inconveniently absent from the whole conversation. But we had unlimited credits on usertesting.com, so that was something.</p>
        </section>
        
        <section>
          <h2>Getting started</h2>
          <p>Olga, the product manager, and I started by articulating a few goals (which are interconnected and overlapping, as most sets of goals are):</p>

          <ul>
            <li>Make the website familiar & welcoming to anyone who visits (thinking especially about younger people, in other parts of the world, who have not yet discovered Wikipedia)</li>
            <li>Improve the experience of reading, navigating long articles, and knowledge discovery</li>
            <li>Better accommodate divergent needs (reading vs. editing)</li>
            <li>Develop a more flexible interface, with an eye towards future features</li>
          </ul>

          <p>Olga also picked key metrics to monitor: pageviews, edit rates, account creation, and session length.</p>

          <p>With a mix of intuition, interviews, research, team meetings, looking at all of the stuff volunteers had modified (including <a href="https://winter.toolforge.org/" target="_blank">proposals that never got built</a>, and cool <a href="https://github.com/Krasjet/wikipedia.rehash" target="_blank">Wikipedia plugins</a>), and reading tarot cards, we started to establish a sense of priorities for the interface:</p>

          <img src={needs} />

          <p>Over the years the interface had become geared more and more towards the needs of editors. In some ways this made sense. Editors are the most critical part of the Wikipedia ecosystem; without them there would be no encyclopedia. At the same time over 99% of people using the website don’t edit. Balancing the divergent needs of readers and editors is difficult, especially given that we wanted to maintain a path for readers to become editors. The sidebar menu, which sat to the left of the content, is a good example of this tension. For editors it contains critical tools, some of which they use multiple times in a given session. For readers it was clutter; a menu of links that they very rarely interacted with (<a href="https://nbviewer.org/github/wikimedia-research/Desktop-behavior-analysis-Aug-2019/blob/master/Desktop_usage_behavior_analysis.ipynb#Sidebar-links" target="_blank">data</a>). And yet, some of the links might serve as paths to “behind the scenes” parts of Wikipedia; little trails into the fray that the curious few might follow to learn more about how Wikipedia works.</p>
          
          <p>We could make those links less prominent for readers, allowing them to more easily focus on the content. But what if, as a result, those curious few were no longer able to find their way behind the scenes (and eventually become editors)? Our perspective on that was: organizing and minimizing the clutter allows us to accentuate things in a more intentional manner. It’s better to provide people with a few clear pathways behind the scenes (like the Talk, Edit, and History links), rather than having a scattershot approach, which might catch a random curious person here or there. I started to use these two images as a metaphor for the different needs we were trying to support:</p>

          <img src={analogy} />

          <p>Many details of the design work from that point onwards honestly aren’t very interesting or unique. Mockups, best practices & accessibility guidelines, prototypes, design reviews, user testing, and the like. Month by month we plodded along, with the help of all of the volunteers (thanks TheDJ, Theklan, Sdkb, and so many others). I spent a lot of time looking at all of the different language-versions of Wikipedia, reaching out to specific communities, and figuring out how to design things in a way that conflicted as little as possible with their local modifications.</p>

          <p>The rough pyramid/prioritization of needs guided the placement of the main elements, and grounded all future explorations. The result was more or less this:</p>

          <img src={wireframe} />

          <p>The sequence of what we worked on was:</p>

          <ul>
            <li>Limiting the line-length, making the sidebar collapsible, and reformatting the logo/site header</li>
            <li>Moving and improving search</li>
            <li>Moving the language switcher</li>
            <li>Reformatting the personal tools (i.e. <i>Your account</i>)</li>
            <li>Introducing a sticky header (logged-in only, currently)</li>
            <li>Moving and improving the table of contents</li>
            <li>Moving the page tools menu</li>
            <li>Reformatting the global navigation menu</li>
          </ul>

          <p>There were, however, a few unique aspects to the design process, which more or less reflect the unique constraints that we deal with as an organization and movement more broadly.</p>
        </section>

        <section>
          <h2>Unique challenges</h2>

          <h3>Prototype everything in code</h3>
          <p>How do you get to a good design? Some people have the luxury of starting with a semi-good design, releasing it (in some limited way), then using real data and feedback to refine it. Since we don’t have that luxury (both in terms of infrastructure, and engineering resources), the process of getting to a good design needs to happen much more up-front, before releasing anything. This ends up putting emphasis on how effectively you communicate designs, and communicate about designs. You need to have many high quality, inclusive conversations about the designs before you build anything. And remember, in our case, inclusive of volunteers/stakeholders across many languages. So then the question becomes: how do you most effectively communicate designs, to facilitate the best discussions about those designs? My answer is: lots of little prototypes built with HTML, CSS, and JavaScript. Because the things I was designing: were interactive (scrolling, clicking, typing, etc.), needed to be available in many languages, and relied significantly on dynamic data (e.g. each article is different and has a different table of contents, each search query returns different results, etc.), the best way I found to effectively evaluate and communicate such designs, that lead to clear, concrete conversations about them, was through prototypes.</p>

          <p>When the project started I built a <a href="vector-2022.web.app" target="_blank">base prototype</a> (<a href="https://github.com/alexhollender/wikipedia-prototype" target="_blank">code</a>), which was the Wikipedia interface hooked up to a few APIs so I could load any article (with its table of contents), in any language, as well as use the search box and get live search suggestions. I then added the ability to switch the interface itself (all of the buttons, links, etc.) to various languages. For each feature/design decision I would build a new prototype on top of that base, exploring the question(s) at hand. The prototypes often included a little settings panel in the bottom corner that allowed you to toggle between the various options being explored. Here is a relatively simple one that explores various ways of indicating the active section in the table of contents (<a href="https://di-visual-design-toc-active.web.app/Okapi" target="_blank">link</a>):</p> 
          
          <video controls width="100%" autoPlay={true} muted={true} loop={true}>
            <source src={prototypeWebm} type="video/webm" />
            <source src={prototypeMp4} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>

          <p>Coming out on the other side of this project, I strongly believe that fully interactive prototypes (versus mockups, or even a click-through prototypes), communicate designs significantly more clearly, and facilitate higher quality discussions and feedback.</p>

          <details>
            <summary>Table of select prototypes I built</summary>
            <table>
              <tr>
                <th>Feature</th>
                <th>Link</th>
                <th>Note</th>
              </tr>
              {prototypes.map((item, index) => (
                <TableRow 
                  feature={item.feature}
                  link={item.link}
                  note={item.note}
                  key={index}
                />
              ))}
            </table>
          </details>
        </section>

        <section>
          <h3>Visual design</h3>
          <p>If you look at <a href="https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Repository/A_History_of_Wiki_Skins" target="_blank">past versions</a> of the Wikipedia interface, you’ll notice that each version has a personality of sorts. A unique color, border style, subtle background image, tab style, or other such eccentricities. At first I felt a bit of a pressure to keep with this tradition, and come up with a new personality. But the more Kieran, Roy, Angy, and myself played around with borders, buttons, gradients, icons, typography, and other things, the more we questioned the function/utility of these stylistic changes, and the more we felt the need to ground our explorations in some logic.</p>

          <img src={visualDesign} />

          <p>Visual design can be used to evoke a feeling, or communicate a conceptual idea. But given that the interpretation of the design is personal/subjective, how do you communicate the idea of free, collaborative knowledge to a global audience, across a wide age range? Visual design can also be used to signify a specific brand, however for Wikipedia this signal is already established via the content itself (infoboxes, blue links, etc.). So rather than trying to evoke a feeling, or reinforce the brand, we fell back to focusing on functionality. We looked at past versions of the website through this perspective, and found that visual design <i>was</i> being used functionally, to help separate different parts of the interface (article, menu, user tools, etc.). Looking at our redesigned interface, we felt that the spatial hierarchy and positioning of elements was already doing most of the heavy lifting to create these separations:</p>

          <img src={surfing} />

          <p>We brought this thinking, as well as a <a href="https://di-visual-design-borders-bgs.web.app/Zebra" target="_blank">prototype</a> with various options for separating the parts of the interface, to the community. Some people felt that the reading experience, as well as the general comprehension of the interface, would benefit from more clear visual separation between the various regions. We have not yet reached a conclusion about this, but there’s a great discussion you can read through, and participate in, <a href="https://phabricator.wikimedia.org/T259240" target="_blank">here</a>.</p>

          <video controls width="100%" autoPlay={true} muted={true} loop={true}>
            <source src={contentSeparationWebM} type="video/webm" />
            <source src={contentSeparationMp4} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>

          <p><a href="https://di-visual-design-borders-bgs.web.app/Zebra" target="_blank">Link to prototype</a></p>
        </section>

        <section>
          <h3>Wikipedia articles are often very long</h3>
          <p>The length of Wikipedia articles makes the table of contents a particularly important part of the reading experience. It allows readers to get an overview of the content and structure of the article, it helps them locate what they are looking for, and (because it now dynamically tracks your position within the article) it serves as a map that helps you maintain a sense of where you are and where you have been. Previously the table of contents was only available at the top of the page. So if you were on a long article, clicked a link in the table of contents, then wanted to get back to it, you had to scroll all the way back up. Our inclination was that it should be always available.</p>

          <p>One big question was: should we make the table of contents a fixed sidebar (which is a common pattern), or keep the table of contents inline (a longstanding Wikipedia thing), and then add a supplemental table of contents that appears once you’ve scrolled past the inline one? With an inline table of contents you get as much space as you need to display it. Long section headings, and many levels of nested sub-headings don’t present an issue, so you can display the fully expanded table of contents (though on long articles it often takes up your entire screen, or more). However, inline means putting it below the lead section, so sometimes when you land on the page you can't see the table of contents at all without scrolling (depending on the length of the lead section, and the width of your screen). When the table of contents is in a sidebar, it's much more spatially constrained. However the big upside is that it’s immediately visible when you land on the page, and always remains in the same place. We ran extensive user testing on 5 different options (<a href="https://di-toc-supplementary.web.app/Sushi" target="_blank">1</a>, <a href="https://di-toc-floating.web.app/Frankenstein" target="_blank">2</a>, <a href="https://di-toc-supplementary-2.web.app/Indian_Ocean" target="_blank">3</a>, <a href="https://di-toc-expandable.web.app/Hydrogen" target="_blank">4</a>, <a href="https://di-toc-back-to-top.web.app/Moss" target="_blank">5</a>), in 3 countries, and the results were thankfully clear: make it a fixed sidebar.</p>
          
          <p>Another fairly big decision we made was to collapse sub-sections in the table of contents for longer articles. Sometimes, when an article has many sections and sub-sections, the table of contents is very tall, and you are unable to see all of it without scrolling the page. This makes it difficult to quickly get an overview of the entire article. By collapsing sub-sections for articles with <i>more than 28 sections total</i>, you can see all top-level sections within the table of contents without scrolling. This allows you to quickly learn the contents of the entire page.</p>

          <img src={paris} />

          <p>There were also lots of smaller decisions that were fun to think through, like:</p>

          <ul>
            <li>When you scroll to a section that has collapsed sub-sections, should the parent section automatically expand? (<a href="https://di-toc-section-auto-expand.web.app/Paris" target="_blank">prototype link</a>)</li>
            <li>When you click on a link in the table of contents should the scroll be animated or instant? (<a href="https://di-toc-instant-animated.web.app/China">prototype link</a>)</li>
            <li>Should we have an “expand all” button for articles with collapsed sub-sections? (<a href="https://di-toc-expand-collapse-all.web.app/Mount_Fuji" target="_blank">prototype link</a>)</li>
            <li>Should we continue hiding the table of contents on articles with less than 4 sections? (<a href="https://phabricator.wikimedia.org/T318186" target="_blank">task link</a>)</li>
          </ul>

          <p>You can read about more of the details and rationales <a href="https://www.mediawiki.org/wiki/Skin:Vector/2022/Design_documentation#Table_of_contents" target="_blank">here</a></p>
        </section>

        <section>
          <h3>Development, the democratic process, and RfCs</h3>
          <p>As I mentioned before, Wikipedia is a democratically run project. Many decisions are made through a consensus process. Exactly who has what power, and how to move forward amidst disagreement is unfortunately unclear. And processes designed for resolving editorial disputes, don't necessarily work well for making design decisions. Because the billions of readers, whose needs we were trying to represent, do not participate in Wikipedia’s democratic process, we worried that the discussions might be lopsided, and continue to prioritize the needs of logged-in editors over logged-out readers.</p>
            
          <p>At the beginning of the project we asked a few Wikipedias to be early adopters of our changes (Basque, French, Hebrew, Persian, and others). That meant, for those "pilot" Wikipedias all changes we made were released by default to all logged-in <i>and</i> logged-out people (though logged-in people, who are typically editors, could opt-out if they wanted). So if you were using one of those Wikipedias, you would have seen the changes happen gradually, over the past couple of years. This gave us usability feedback, and also served as a quasi-A/B test. Our hope was, if we could develop an interface that worked for thousands of editors and millions of readers, and prove it through data, including (hopefully) low editor opt-out rates, we could get the rest of the Wikipedia communities on board.</p>
          
          <p>For all of the other Wikipedia communities, while they were involved all along — over 2,000 volunteers participated in the development process, reviewing prototypes, helping us design features, giving feedback, etc. — the new interface was available to them as an opt-in feature.</p>

          <p>Almost every day I would interact with volunteers from various Wikipedia communities, big and small, on our project's <a href="https://www.mediawiki.org/wiki/Talk:Reading/Web/Desktop_Improvements" target="_blank">message board</a>, publicly available <a href="https://phabricator.wikimedia.org/tag/desktop_improvements_vector_2022/" target="_blank">Phabricator tasks</a>, in chat rooms, and occationally at hackathons and other Wikipedia events. We also had five formal, asynchronous feedback collection events throughout the project (<a href="https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Community_interactions_overview#Prototype_feedback_events" target="_blank">link</a>). Since their feedback on each of the changes along the way was largely positive, and all of our data from our test Wikipedias looked great (only ~13% of editors on our pilot Wikipedias opted out), we hoped that when we eventually asked the other communities, they would each adopt the redesigned interface. Alas, English Wikipedia (by far the largest), wanted to hold an <a href="https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment" target="_blank">RfC</a> (Request for Comment), which is a longstanding Wikipedia process that is somewhere in between a vote and a discussion (<a href="https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment/Deployment_of_Vector_(2022)" target="_blank">link to the RfC</a>).</p>

          <p>Below is a rough map of all interactions we had with volunteers before the vote on English Wikipedia began. Of course not all of these interactions were about design, but many of them were.</p>

          <img src={community} />

          <p>As the comments/votes started coming in, I became frustrated at how unrepresentative of the general public the people voting were. It was a very small group of editors, potentially making a decision for billions of readers. It was also unclear if the people who were voting had participated in past discussions, and/or had taken the time to read through the project documentation, research results, data, etc. It seemed like we were getting a lot of first reactions (as it turned out, only ~28 of the 159 people opposing the new interface had previously engaged in discussions, feedback, etc.). There was a lot of arguing about white space and icons, and people saying they simply didn't like it, rather than discussions of user needs and/or key metrics.</p>

          <p>The discussion/vote lasted for a month, was nearly tied in the end (154 support, 165 oppose), but thankfully the final judgment (which is called a “closing”, and is done by a volunteer) approved the redesign. Compared with other RfCs this was a big success. The volunteer communities are generally very change-averse (in some ways for good reason), and changes developed by the Wikimedia Foundation can be particularly challenging to get acceptance for. However I was still left feeling a bit weirdly about the vote. Did we just get lucky? Did all of the previous interactions we had with volunteers actually build support? Did all of the feedback we incorporated lead to a better design? And why do people think whitespace is an indication of a failed design (like holy shit, some people hate it so much)?</p>
          
          <p>The positive outcome of the RfC was probably a mix of all of those things, but we won’t really ever know how/why we arrived there, which is bothersome to me. I was happy to see some small discussions within the RfC regarding the validity of the RfC process for making such large decisions, as well as some people commenting on the lack of reader participation. In general I think it also highlighted both the lack of alignment in terms of development priorities between some of the community members and the Wikimedia Foundation, and the need for more analytics and data. I have many more thoughts on ways we might evolve the RfC process, and the systems of governance on Wikipedia in general, which I’ll save for another time.</p>

          <p>(Addendum: after the launch some people on English Wikipedia started another RfC, about rolling back the redesign. You can read all 238,758 words of that RfC <a href="https://en.wikipedia.org/wiki/Wikipedia:Requests_for_comment/Rollback_of_Vector_2022" target="_blank">here</a>. For context: <i>Moby Dick</i> is 209,117 words.)</p>
        </section>

        <section>
          <h3>The data we have so far</h3>
          <p>While somewhat limited compared with what other websites are able to collect, the data we have so far paints a picture of positive change:</p>

          <ul>
            <li>The new table of contents increases deeper exploration of articles. Our A/B test showed 53% more clicks for logged-in people, and 45.5% more clicks for logged-out people.</li>
            <li>The new search bar increased the amount of searches started by 28.9%</li>
            <li>9 months after the deployment, 87% of active logged-in users on the early adopter communities (averaged, incl. French Wikipedia) did not opt-out of the new interface</li>
            <li>The sticky header makes it quicker to access tools that editors use often. It decreases scrolling to the top of the page by 15%.</li>
            <li>The skin does not negatively affect pageviews, edit rates, or account creation. There is observational evidence of increases in pageviews, and account creation across partner communities.</li>
          </ul>
        </section>

        <section>
          <h3>Explosing the system</h3>
          <p>Have you ever wondered whether or not a Wikipedia article was accurate, or more generally if you can trust Wikipedia? What many people don’t understand is that Wikipedia articles <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research" target="_blank">don’t contain original thoughts or opinions</a>. In a sense they aren’t even really “written”, or at least not in the way that someone might write an essay or a poem. Instead Wikipedia articles are collages of facts that credible researchers have published about a given topic elsewhere. Think of an article like puzzle, or a quilt, with each piece being a fact about the topic that was previously published by a credible institution. With this in mind it becomes clear that any Wikipedia article is only as accurate as the sources from which the facts were gathered. You can of course question the motives or skill level of the editors, who are the ones going out, gathering the facts, and then weaving them together into coherent articles. But ultimately Wikipedia is a container filled with facts, rather than a blank page upon which people have written whatever they want about a topic.</p>

          <p>During the project we became interested in how the interface could better communicate this meta-information about Wikipedia articles. How might we help people understand that editors are more fact-gatherers than authors, that they have long, involved disputes over whether or not a source was credible, and that they actively watch articles in order to ensure that any information added to them was coming from a credible source? How could we expose this dynamic, living system, that is currently nearly invisible to most readers, in a way that would empower them to better evaluate the credibility of a given article, and ultimately position them to be participants, rather than consumers? What if the “reading experience” of Wikipedia wasn’t just about reading the content, but also being able to <i>read</i> an article in this meta way? Could we help people grow from being <i>content readers</i>, to more <i>informed readers</i>? Partly inspired by the <a href="https://winter.toolforge.org/" target="_blank">Winter prototype</a>, I made some sketches of Wikipedia articles that included various pieces of metadata, which might serve as little clues as to what was going on. I then thought about some kind of article activity & metadata summary, that would quickly give people a sense of the state of an article with regards to editor activity, as well as completeness/credibility.</p>

          <p>[mockups / prototype will be added soon]</p>

          <p>Ultimately these ideas were out of scope, but I'm excited about them, and hope they get tested out sooner or later.</p>
        </section>

        <hr></hr>

        <section>
          <p>That’s all I’ve managed to type up so far. I hope some parts of our process can be usefully borrowed by others, and that people reach out to me to learn more about the process, challenges, and specific changes/decisions that we made. I’ve also begun to compile a list of responses to specific UI/UX questions that people might have, which can be found here: <a href="https://www.mediawiki.org/wiki/Skin:Vector/2022/Design_documentation" target="_blank">design documentation</a>. For reference, here's a link to the <a href="https://en.wikipedia.org/wiki/Surfing?useskin=vector" target="_blank">previous version</a> of the interface, which is still available to all logged-in editors via Settings. And yes,we should increase the font-size to 16px.</p>

          <p>Thanks for reading,<br></br>alexhollender@gmail.com</p>
        </section>

        <hr></hr>

        <section id="credits">
          <p>The project was developed by the Web Team at the Wikimedia Foundation, with continual support from the Research & Design Team.</p>

          <p>Special thanks for extra design support to:</p>

          <ul>
            <li>Rita Ho</li>
            <li>Olga Vasileva</li>
            <li>Roy Tatum</li>
            <li>Frank Chimero</li>
            <li>Kieran McCan</li>
            <li>Matthew Williams</li>
            <li>Quiddity (Nick Wilson)</li>
            <li>TheDJ (Derk-Jan Hartman)</li>
            <li>& Nirzar Pangarkar</li>
          </ul>

          <p>☺</p>
        </section>
      </div>
    </>
  );
}

export default Wikipedia2023;
