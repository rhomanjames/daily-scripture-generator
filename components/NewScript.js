import React from 'react'
import {TwitterIcon, FacebookIcon} from "react-share"
import {TwitterShareButton, FacebookShareButton} from "react-share"



function NewScript() {

        let scripts = [{"name": "For this is the whole duty of man, that we fear Yah and keep his commandments and his commandments are not grievous.",  
                        "chapter": "Ecclesiastes 12:13",
                        "action": "Read Exodus 20 and find at least two commandments you can do better with"}, 
                        {"name": "Sin is the transgression of the law",  
                        "chapter": "1 John 3:4",
                        "action": "Read a chapter from the book of Deuteronomy and try to find a law you are not currently aware of."},
                        {"name": "For this is the love of Yah, that we keep his commandments",  
                        "chapter": "1 John 5:3",
                        "action": "How can we show Yah that we love him more today?",
                        },
                        {"name": "We shall not live by bread alone, but by every word that proceeds from Yah",  
                        "chapter": "Luke 4:4",
                        "action": "Go back into the Torah (Genesis-Deuteronomy) and find some of Yah's words that you may not be familiar with.",
                        },
                        {"name": "Humble yourselves therefore under the mighty hand of Elohim, that he may exalt you in due time:",  
                        "chapter": "1 Peter 5:6",
                        "action": "How can you show more humility today?",
                        },
                        {"name": "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Yah your Elohim is with thee whithersoever thou goest.",  
                        "chapter": "Joshua 1:9",
                        "action": "When was the last time you didnt show courage? How can you change that next time?",
                        },
                        {"name": "Blessed are they that keep his testimonies, and that seek him with the whole heart.",  
                        "chapter": "Psalms 119:2",
                        "action": "How can you seek Yah more today?",
                        },
                        {"name": " I remembered thy judgments of old, O Yah; and have comforted myself.",  
                        "chapter": "Psalms 119:52",
                        "action": "What is one of Yah's wonders that you can think about to comfort yourself?",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I made haste, and delayed not to keep thy commandments.",  
                        "chapter": "Psalms 119:60",
                        "action": "Have you been delaying to keep Yah's commandments? Why or why not?",
                        },
                        {"name": "The law of thy mouth is better unto me than thousands of gold and silver.",  
                        "chapter": "Psalms 119:72",
                        "action": "Which one is more important to you: The Torah (Law) of Yah or money?",
                        },
                        {"name": "Depart from me, ye evildoers: for I will keep the commandments of my God.",  
                        "chapter": "Psalms 119:115",
                        "action": "Who is someone around you that you need to depart from you in order for you to grow?",
                        },
                        {"name": "My flesh trembleth for fear of thee; and I am afraid of thy judgments.",  
                        "chapter": "Psalms 119:120",
                        "action": "Are you afraid of Yah's righteos judgements according to the Torah?",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I hate and abhor lying: but thy law do I love.",  
                        "chapter": "Psalms 119:163",
                        "action": "When was the last time you lied? Why?",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        },
                        {"name": "I thought on my ways, and turned my feet unto thy testimonies.",  
                        "chapter": "Psalms 119:59",
                        "action": "What is one way you can turn your feet back to the testimonie of Yah?.",
                        }]

                        let num = Math.floor(Math.random() * scripts.length)
        return (
        <div className="flex items-center justify-center flex-col">
             {/*Scripture Verse*/}
            <div className="w-full flex h-auto mb-4 rounded-lg p-2 flex-col border-gray-50 text-center">
                <h1 id="text" className="text-2xl font-bold mb-2"> {scripts[num].name}</h1> 
                <h4 id="location" className="text-sm">{scripts[num].chapter}</h4>
            </div>
            {/*Share*/}
            <div className="space-x-4 mt-4 flex w-full justify-center items-center">
                <FacebookShareButton
                url="https://github.com/rhomanjames"
                quote={scripts[num].name + " (" + scripts[num].chapter + ")" + " | " + scripts[num].action}
                title="My Daily Scriptures"
                className="Demo__some-network__share-button">
                    <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
                <TwitterShareButton
                url="www.servingYah.com"
                className="Demo__some-network__share-button">
                    <TwitterIcon
                    size={32}
                    round />
                </TwitterShareButton>
            </div>
            {/*Action*/}
            <div className="w-3/4 md:w-1/2 justify-center text-sm rounded-lg bg-blue-50 mt-4 shadow-inner hover:border-blue-300 transition border-2 border-transparent flex p-2 flex-col text-center">
                <h4 className=" justify-center italic px-8" id="action">{scripts[num].action}</h4>
            </div>
        </div>
    )}


export default NewScript
