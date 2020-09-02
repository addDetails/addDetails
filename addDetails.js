// ==UserScript==
// @name         addDetails
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds additional details to websites.
// @author       addDetails
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

    function addDetails() {
        //document.body.style.border = "15px solid red";
        const docBody = document.querySelectorAll('p');
        const docTweets = document.getElementsByClassName("twitter-tweet");
        //const docTweets = document.getElementsByClassName("tweet-embed");
        const docButtons = document.getElementsByTagName("button");
        //const docButtons = document.getElementsByClassName("react-share__ShareButton");

        const allTheCrap = [
            "$& (<a href='https://www.reuters.com/article/us-usa-trump-impeachment-gao/u-s-watchdog-says-trump-administration-violated-law-by-withholding-ukraine-aid-idUSKBN1ZF22Y'>who illegally pressured Ukraine into announcing an investigation into Joe Biden for Trump's personal political advantage</a>)",
            "$& (<a href='https://www.politico.com/story/2018/01/22/stormy-daniels-trump-payment-illegal-donation-357250'>who likely violated campaign finance laws when he paid adult film actress Stormy Daniels \$ 130,000 to keep the affair secret from voters during the final months of the 2016 Presidential race</a>)",
            "$& (<a href='https://apnews.com/00b0910a5e331ead1da4569c48c06f74'>who has failed to release his tax returns despite telling the American people that he would</a>)",
            "$& (<a href='https://www.cheatsheet.com/money-career/trump-profiting-presidency.html/'>whose hotels and resorts have earned him millions of dollars of profit in taxpayer dollars during his presidency</a>)",
            "$& (<a href='https://www.businessinsider.com/coronavirus-trump-claims-covid-19-could-disappear-2020-2'>who repeatedly -- and incorrectly -- claimed that the China Virus would miraculously disappear in warm weather</a>)",
            "$& (<a href='https://www.mercurynews.com/2019/01/16/like-jeff-bezos-donald-trump-was-once-embarrassed-by-the-national-enquirer-over-tawdry-affair-report/'>who is notorious for adultery</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/factcheck/2020/08/13/fact-check-donald-trump-did-donate-kamala-harris-past-campaigns/3356945001/'>who has donated at least $6000 to Vice-Presidential nominee Kamala Harris's political campaigns</a>)",
            "$& (<a href='https://americanindependent.com/white-house-jared-kushner-security-clearance/'>who overruled national security recommendations that advised against giving his unelected and financially conflicted family members access to highly classificed information</a>)",
            "$& (<a href='https://www.ibtimes.com/heres-how-much-trumps-us-mexico-border-wall-has-been-built-3004047'>who was unable to force Mexico to pay for a border wall that -- to this day -- is only 3 miles long</a>)",
            "$& (<a href='https://splinternews.com/children-in-cages-a-symbol-of-trump-s-america-1827319445'>who has unfortunately been forced to admit his role in separating immigrant children from their parents</a>)",
            "$& (<a href='https://apnews.com/425e43fa0ffdd6e126c5171653ec47d1'>who has yet to retaliate against Russia for putting bounties on U.S. soldiers' heads</a>)",
            "$& (<a href='https://www.mediamatters.org/white-nationalism/right-wing-media-keep-lying-about-trumps-very-fine-people-comment-after/'>who has sometimes failed to distinguish between peaceful protestors and neo-nazis</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/politics/2020/04/21/senate-intel-committee-backs-finding-russia-helped-trump-win/2998433001/'>who, according to a Republican-led Senate committee report, was found to have benefited from Russian interference in the 2016 Presidential election</a>)",
            "$& (<a href='https://bipartisanreport.com/2020/08/18/criminal-investigation-into-jared-kushner-trump-jr-announced-by-nbc/'>whose son Donald Trump Jr. and son-in-law Jared Kushner were referred by a Republican-led Senate committee to the Department of Justice for criminal investigation following from Russia's 2016 election interference</a>)",
            "$& (<a href='https://www.lawfareblog.com/why-trumps-inspector-general-purge-not-national-scandal/'>who has fired more inspectors general -- government officials who serve as a check against abuses of power -- than all other U.S. Presidents combined</a>)",
            "$& (<a href='https://www.psychologytoday.com/us/blog/mind-in-the-machine/201609/the-psychology-behind-donald-trumps-unwavering-support'>who has convinced many Americans that he is the only person who should be allowed the freedom to perform any sexual or criminal act he wants</a>)",
            "$& (<a href='https://www.towleroad.com/2020/07/trump-doctors-were-very-surprised-that-i-passed-a-cognitive-test-watch/'>who is suspected to have suffered a stroke in November 2019</a>)",
            "$& (<a href='https://www.factcheck.org/2016/05/trumps-made-in-the-u-s-a-spin/'>whose clothing line continues to be made in China</a>)",
            "$& (<a href='https://www.haaretz.com/us-news/the-ominous-nazi-era-precedent-to-trump-s-fake-news-attacks-1.5438960'>who, in the interest of full disclosure, has used smear tactics against the media that are similar to those that were used by the Nazis</a>)",
            "$& (<a href='https://www.foxnews.com/us/states-spike-poison-control-calls'>who is no stranger to embarrassing comments, having suggested that people could ingest bleach to kill the coronavirus</a>)",
            "$& (<a href='https://www.washingtontimes.com/news/2020/jun/6/donald-trump-shatters-personal-twitter-record-200-/'>who once tweeted 200 times in one day</a>)",
            "$& (<a href='https://www.washingtontimes.com/news/2019/jun/30/how-socialism-violates-all-ten-commandments/'>who has reportedly never violated a single one of the Ten Commandments</a>)",
            "$& (<a href='https://apnews.com/2aa7979e6fb88948895407f127e5e5b6'>who caused an uproar when tear gas was used to disperse peaceful protestors that were gathered along his route to St. John’s Church</a>)",
            "$& (<a href='https://www.youtube.com/watch?v=lwh90m-w-Rk'>a public relations genius</a>)",
            "$& (<a href='https://www.opensecrets.org/trump/trump-properties'>who, despite donating his Presidential salary, has found a way to rake in over 20 million dollars as President</a>)",
            "$& (<a href='https://www.newsandguts.com/trump-russia/'>who has been building secret diplomatic relations with Russia for over 35 years</a>)",
            "$& (<a href='https://presidentialgolftracker.com/'>who has golfed much less than former President Woodrow Wilson</a>)",
            "$& (<a href='https://filmdaily.co/news/jeffrey-epstein-donald-trump/'>whose connections to Jeffrey Epstein have not been made fully public</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/factcheck/2020/08/07/trump-lawyer-helped-kanye-west-try-get-wisconsins-ballot/3313650001/'>whose lawyers are coordinating with Kanye West's lawyers to try to siphon votes away from Joe Biden</a>)",
            "$& (<a href='https://www.abc.net.au/news/2020-07-20/best-bits-from-donald-trumps-fox-news-interview/12471794'>who has expressed doubts about whether he will accept the voters' wishes in the 2020 Presidential election</a>)",
            "$& (<a href='https://www.reuters.com/article/us-usa-election-dropboxes-idUSKBN25G14I'>who has done an excellent job creating confusion among voters about how to participate in the 2020 election</a>)",
            "$& (<a href='https://www.adn.com/nation-world/2020/08/22/analysis-how-trump-mnuchin-and-dejoy-edged-the-postal-service-into-a-crisis/'>who flexed his unlimited power over the entire U.S. populace by crippling the USPS at exactly the right moment</a>)",
            "$& (<a href='https://www.redletterchristians.org/wp-content/uploads/2016/10/pence.trump_.jpg'>who has cast such a spell over Republicans that he could get away with grabbing his male supporters by the p*ssy as well</a>)",
            "$& (<a href='https://www.economist.com/leaders/2018/07/21/donald-trumps-humiliation-in-helsinki'>who has only shown a few moments of weakness during his presidency, many in the presence of Vladimir Putin</a>)",
            "$& (<a href='https://www.syracuse.com/life-and-culture/g66l-2019/11/1478636cbd8810/trump-may-host-the-apprentice-white-house-tv-show-buzz.html'>whose previous career as a reality TV show host demonstrates that Americans are willing to vote for entertainers who have no experience in law or government</a>)",
            "$& (<a href='https://www.brookings.edu/blog/fixgov/2018/04/13/trumps-lies-corrode-democracy/'>who has told over 20,000 lies as President</a>)",
            "$& (<a href='https://www.businessinsider.com/trump-pence-gop-law-order-for-others-but-not-associates-2020-8'>whose 'law-and-order' campaign messaging appears to be in direct contradition to the dozens of laws that he -- and those working for him -- have broken</a>)",
            "$& (<a href='https://www.businessinsider.com/trump-is-not-law-order-president-lawless-disorder-rnc-2020-8'>who has created governmental lawlesness and disorder as President</a>)",
            "$& (<a href='https://www.bbc.com/news/world-europe-53799065'>whose administration has shown remarkable similarities to the government of Belarus</a>)",
            "$& (<a href='https://www.upi.com/Top_News/US/2020/08/07/Trump-admin-to-send-federal-troops-to-Memphis-St-Louis/7211596772279/'>who has expanded 'big-government' influence over American citizens by sending federal troops into U.S. cities</a>)",
            "$& (<a href='https://www.reuters.com/article/us-goodyear-trump-idUSKCN25F1XQ'>who, by encouraging a boycott of Goodyear, has jeopardized the jobs of over 60,000 blue collar workers in Ohio</a>)",
            "$& (<a href='https://blogs.timesofisrael.com/trump-benefits-from-violent-protests/'>who has ushered in an uncharacteristically violent and polarized four years in modern America</a>)",
            "$& (<a href='https://news.yahoo.com/5-ways-donald-trump-failed-drain-swamp-100013259.html'>who has failed to 'drain the swamp,' as promised</a>)",
            "$& (<a href='https://www.marketwatch.com/story/trump-justice-department-sues-to-seize-private-property-for-border-wall-construction-2019-12-27'>who been criticized for government overreach for attempting to seize private property from American taxpayers</a>)",
            "$& (<a href='https://www.forbes.com/sites/stevedenning/2019/02/24/why-we-should-worry-about-trumps-declaration-of-an-emergency/'>who has set numerous precedents during his time in office that will make it easier for all future presidents to abuse their power</a>)",
            "$& (<a href='https://www.axios.com/trump-john-kelly-fbi-41678290-167a-44c2-a20a-377955485bc8.html'>who sought to appoint an FBI director who would be loyal to him, rather than to the Constitution</a>)",
            "$& (<a href='https://thehill.com/blogs/blog-briefing-room/news/499917-trump-shares-video-supporter-saying-politically-only-good-democrat-is-a-dead'>who is considered to have incited violence when he shared a video saying \"the only good Democrat is a dead Democrat\"</a>)",
            "$& (<a href='https://lmtribune.com/news_ap/trump-s-deference-to-putin-back-under-harsh-scrutiny/article_f6871234-bba2-11ea-ab01-afa4b5a40c05.html'>who has raised justifiable skepticism about his lack of willingness to criticize Vladimir Putin, despite a reputation for criticizing almost everyone else</a>)",
            "$& (<a href='https://www.usatoday.com/story/news/politics/elections/2016/06/09/donald-trump-unpaid-bills-republican-president-laswuits/85297274/'>who, before becoming president, was sued over 3,500 times for failing to pay American small business owners for work he hired them to do</a>)"]


        const regex = /\.*(?<!(Dear.))(President Trump|President Donald Trump|Donald Trump|Donald J. Trump|Donald J Trump|President Donald J. Trump|President Donald J Trump)(?!('|’|:))(?!.(\(|Jr|Junior|Sr|Senior))/gi;
        const regexm = /\.*(?<!(Dear.))(President Trump|President Donald Trump|Donald Trump|Donald J. Trump|Donald J Trump|President Donald J. Trump|President Donald J Trump)(?!('|’|:))(?!.(\(|Jr|Junior|Sr|Senior))/gm;
        const quoted = /(“(.*?)”|"(.*?)")/g;
        const kr = /Kyle Rittenhouse/gi;
        const antifa = /\bantifa\b/gi;
        const socialism = /(\bsocialist\b|\bsocialism\b)/gi;
        const marxism = /(\bmarxist\b|\bmarxism\b)/gi;
        const riots = /\briots\b/gi;
        const rioters = /\brioters\b/gi;

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

        const antifaLink = ["<a href='https://www.merriam-webster.com/dictionary/antifa'>$&</a>",
                            "<a href='https://www.dictionary.com/browse/fascism?s=ts'>$&</a>",
                            "$&",
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


        //var i = 0;
        //var unmatched = 'true';
        //do {
        //    unmatched = regex.test(docBody[i].innerHTML) == 'false';
        //    docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
        //    rmatch = regex.test(docBody[i].innerHTML);
        //    i++;
        //}
        //while(unmatched);

        //document.body.style.border = "15px solid green";

        var i;

        //for (i = 0; i < docBody.length; i++) {
        //    docBody[i].innerHTML = docBody[i].innerHTML.replace(/(<a href=\"https:\/\/www.foxnews.com\/category\/person\/donald-trump\">President Trump<\/a>|<a href="https:\/\/www.foxnews.com\/category\/person\/donald-trump" target="_blank">President Trump<\/a>)/gi, "President Trump");
        //    docBody[i].outerHTML = docBody[i].outerHTML.replace(/(<a href=\"https:\/\/www.foxnews.com\/category\/person\/donald-trump\">President Trump<\/a>|<a href="https:\/\/www.foxnews.com\/category\/person\/donald-trump" target="_blank">President Trump<\/a>)/gi, "President Trump");
        //}

        for (i = 0; i < docBody.length; i++) {
            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                    }
                } else {
                    docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                }
            } else {
                if (docBody[i].innerText.match(quoted) !== null && docBody[i].innerText.match(quoted) !== undefined) {
                    if (docBody[i].innerText.match(quoted).indexOf(docBody[i].innerText.match(regexm)) == -1) {
                        if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                            if (docBody[i].parentElement.localName != "blockquote") {
                                docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
                            }
                        }
                    }
                }
            }
        }






        //if (docBody[i].innerHTML.indexOf('\"') == -1 && docBody[i].innerHTML.indexOf('\“') == -1) {
        //if (docBody[i].parentElement.localName != "blockquote") {
        //    docBody[i].innerHTML = docBody[i].innerHTML.replace(regex, allTheCrap[Math.floor(Math.random()*allTheCrap.length)]);
        //}
        //}
        //}

        for (i = 0; i < docBody.length; i++) {
            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(kr, krDesc[Math.floor(Math.random()*krDesc.length)]);
                    }
                }
            }
        }

        for (i = 0; i < docBody.length; i++) {
            docBody[i].innerHTML = docBody[i].innerHTML.replace(antifa, antifaLink[Math.floor(Math.random()*antifaLink.length)]);
        }

        for (i = 0; i < docBody.length; i++) {
            docBody[i].innerHTML = docBody[i].innerHTML.replace(socialism, socialismLink[Math.floor(Math.random()*socialismLink.length)]);
        }

        for (i = 0; i < docBody.length; i++) {
            docBody[i].innerHTML = docBody[i].innerHTML.replace(marxism, marxismLink[Math.floor(Math.random()*marxismLink.length)]);
        }

        for (i = 0; i < docBody.length; i++) {
            if (docBody[i].innerText.indexOf('\"') == -1 && docBody[i].innerText.indexOf('\“') == -1) {
                if (docBody[i].parentElement !== null && docBody[i].parentElement !== undefined) {
                    if (docBody[i].parentElement.localName != "blockquote") {
                        docBody[i].innerHTML = docBody[i].innerHTML.replace(riots, riotsTxt[Math.floor(Math.random()*riotsTxt.length)]);
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



        //document.body.style.border = "15px solid white";
    }

    var oldHref = document.location.href;

    window.onload = function() {

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

    window.onload();
    addDetails();



})();
