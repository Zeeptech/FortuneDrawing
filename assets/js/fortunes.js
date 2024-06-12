const fortunes = [
    "The creative - heaven over heaven: Be true to yourself and the creative forces of the universe will be at your disposal. Trust that fate works in ways that are sometimes difficult to understand, but that you are learning lessons that will serve you well in life.",
    "The receptive - earth over earth: Try to remain open-minded and open to criticism and feedback; they will allow you to grow and become wise. This is your time to follow since there you do not have enough experience to lead or initiate change. Maintain and develop your inner strength for when you'll need it in the future.",
    "Initial difficulty - water over thunder: You are facing a period of potential growth and a fresh start, maybe with some initial difficulty. The new situation can develop in any direction. Accept any help that is offered to you and stick to your plan. Allow the situation to resolve itself.",
    "Inexperience - mountain over water: Beginner's luck will run out. Seek support and guidance from an experienced teacher and be prepared to learn from your mistakes.",
    "Waiting - water over heaven: Now is the time to wait and have faith in the natural order of things. Take stock of yourself and your situation, and work on any insecurities that cause internal imbalance.",
    "Contention conflict - heaven over water: By forcing your viewpoint instead of accepting what comes, you've brought on opposition. Let go of your fears, doubts, and impatience, and communicate with others to develop an understanding that will resolve conflict. Accept and respect the advice of someone wiser than you are.",
    "Discipline - earth over water: Be steadfast in your purpose and resolve, and exemplary in your actions. Be an inspiration to others, and enjoy their support towards achieving a worthy goal.",
    "Union holding together - water over earth: Examination of your actions and words for their sincerity will lead to stronger bonds with others. Be steadfast in your principles; don't give in to temptations and difficulties. Be true and sincere, and you'll achieve a lot.",
    "Timing force - wind over heaven: Forcing your way will only bring misfortune. Remain focused on your plan and surpass obstacles with gentleness and decorum. Stay focused on the long term. Plant the seeds for success now, and reap a bountiful harvest in the future. Cultivate tolerance, patience, detachment, and adaptability. Understand that all you have the power to change is yourself.",
    "Trading carefully - heaven over lake: Be careful not to step on others' toes and offend. Do not be subservient to those above you nor domineering to those below you. This will give you the confidence you need to succeed.",
    "Tranquility - earth over heaven: Now is a time of growing potential. It is possible to grow to great heights but keep your inner balance that has brought you here. Do not become complacent now.",
    "Standstill - heaven over earth: A difficult period is approaching. Your run of good fortune has begun to wane. Retreat into yourself and have faith that things will improve sooner if you stick to your plans and don't give up.",
    "Fellowship - heaven over fire: You will work together with others towards a common goal. Deal with reservations and dissent early to head off problems down the road.",
    "Great possession - fire over heaven: By being true to yourself and honest, you will enter a period of great abundance. Now is an opportunity for you to shine, but don't forget to keep your humility and integrity. If you abuse your strength, you will lose it.",
    "Humility - earth over mountain: Try to stay modest. You can deal with any challenge if you remain modest and don't lose sight of what's right.",
    "Happiness - thunder over earth: Now is a time to begin a new undertaking, but make sure your inner foundation is strong. You have the momentum and energy to see plans through. Avoid egocentricity.",
    "Following - lake over thunder: Accept the way things are and stay steady in response to events. Inner truth and acceptance will lead to contagious happiness.",
    "Disruption - mountain over wind: There is disorder. There is an opportunity to fix the situation by righting wrong ideas and attitudes. You need strength of character and decisive action, but first figure out where the source of disorder is. When you've identified it, work quickly.",
    "Approach - earth over lake: Good times are approaching. Your undertakings will meet with success. People above you will offer help and support. Don't lose sight of what brought you here.",
    "Observing - wind over earth: You are receptive to the wisdom of the universe; assess yourself and the situation and see things the way they are, instead of the way you want them to be. The creative power of the universe works in mysterious ways, influencing situations and peoples.",
    "Cutting through - fire over thunder: There is an obstacle here, possibly an incorrect attitude that needs to be dealt with. Try to see the problem clearly. Forcefulness will bring misfortune. Use your inner strength to withdraw.",
    "Adornment - mountain over fire: A person who does not try too hard to be attractive, but cultivates devotion to the simplicity of the inner truth, possesses a grace and beauty that is obvious to everyone.",
    "Stripping away - mountain over earth: Everything seems to be going wrong. Attempting to influence the situation will only prolong it. Withdraw now, wait patiently, and allow everything to settle.",
    "Returning - earth over thunder: Now is a time of increasing fortune. Watch and wait as things progress on their own. Consolidate your strength and energy for the time of growth that is coming soon.",
    "Innocence - heaven over thunder: Do not anticipate the future or hold on to the past at this point. Nip cynicism in the bud so intuition can flow and so that you can be receptive to the advice of a wiser adult.",
    "Taming force - mountain over heaven: Remain calm and detached in the face of hostile provocations from others who seek to undermine your resolve. Your character is being tested. Hold on to your inner truth. Use these difficulties as opportunities to understand the situation better. Some people may be afraid and jealous of your spiritual progress. Ignore them and stay focused.",
    "Nourishment - mountain over thunder: By feeding the desires of the ego, we encourage the growth of inferior spiritual qualities such as envy, self-pity, and distrust. Through meditation, we cultivate tranquility and receptiveness that allows wisdom to flow in.",
    "Excess - lake over wind: You are under unbearable stress. It is likely you'll give in. You understandably want to escape the situation, but that will only delay the inevitable. Constantly running weakens your resolve and worsens your problems. A time to stand firm. You are ready. Rely on your inner truth and integrity and you will emerge stronger. This might require a sacrifice, but you will see the fruits of your efforts if you persevere.",
    "The abyss - water over water: Be at peace with the forces of change in life instead of struggling against them. Open your heart and adopt a detached, receptive state that will allow the universe to work everything out.",
    "Fire/The clinging - fire over fire: Sticking to the right principles will give you the strength to live a joyful and fulfilling life, able to face difficulties with equanimity and attain independence.",
    "Sensitivity - lake over mountain: Following the right plan will bring about a happy union that is mutually beneficial to both parties involved. Be open-minded and diplomatic to receive benefits from external influences. To have a beneficial influence on others, you need to maintain inner independence and integrity, acting from a position of quiet inner truth and humility.",
    "Persistence - thunder over wind: You're facing a time of endurance, which requires perseverance and stamina. Be calm, sincere and be careful to stay true to your path and you will succeed. Remain steadfast. Do what needs to be done with calmness, detachment, and integrity.",
    "Withdrawal/retreat - heaven over mountain: Accept the fact that you are faced with unfavorable odds. Withdraw in order to set a strategy in place for a more favorable time to move forward.",
    "The power of greatness - thunder over heaven: You're gaining power and strength, but beware of complacency. Maintain patience, humility, calmness, and detachment. Wait for the appropriate time to act and stay balanced. Avoid misguided beliefs in your power to influence things to your own benefit as the resulting misfortune will be great.",
    "Progress - fire over earth: Great progress. Keep your actions pure and simple, or your judgment will become impaired. Work on progress for its own sake rather than in the pursuit of selfish goals.",
    "Darkening of the light - earth over fire: When surrounded by difficult circumstances keep your inner light burning to help guide you through difficulties. Giving in to weakness or feelings of despair when progress stalls dims the brightness within. Set aside distracting emotions, and continue to work hard to maintain your inner truth. You will enjoy slow but steady progress, so have faith in the creative power of the universe.",
    "Family - wind over fire: Cultivate the acceptance, humility, modesty, and gentleness to attract and develop healthy relationships.",
    "Opposition - fire over lake: Resisting the flow of creative energy compounds negative attitudes inside us, which in turn increases resistance in a vicious circle. Everything we experience gives us an opportunity to learn and grow, but we must be willing to scratch beneath the surface.",
    "Halting - water over mountain: Take a break from the situation and examine yourself for attitudes that need correcting. Seek the advice of someone whose judgment you trust.",
    "Liberation - thunder over water: When faced with obstacles, look within yourself and see if there are any negative attitudes that are presenting difficulties. Correcting them will bring relief. The work you have done on yourself will bring release, presenting the way clear for steady progress. Now is a time to step forward with confidence and balance. Don't brood on what has gone; just forgive and forget the past. They were lessons you needed to reach this point.",
    "Decrease - mountain over lake: A period is coming which requires a return to simplicity. Restrict the demands of the ego to strive for success and the achievement of your goals. Your power is limited but by retreating inward and exercising self-discipline it is possible to rely on inner strength to get through this lean period.",
    "Increase - wind over thunder: Great progress can be made at this time. Beware of complacency and remember the source of your good fortune. Be generous and share with others in a humble and sincere way.",
    "Breakthrough - lake over heaven: Resist egotistical influences in order to make a breakthrough. By resisting emotional overreactions, it is possible to defuse the situation before it causes problems.",
    "Meeting - heaven over wind: There is a warning here that ignoring problems or dealing with them in a half-hearted manner will allow them to fester and multiply. Listen to your intuition and examine any suspicions you have closely.",
    "Gathering together - lake over earth: When a group acts together in a spirit of peace and harmony, its strength is magnified making the whole greater than the sum of its parts. This needs a strong leader and a need to deal with the outside world in a calm manner.",
    "Ascending - earth over wind: Great progress can be made at this time by continuing along with the right set of plans. Ask for help from those willing to give it. Nothing can stand in your way if you push steadily towards completion.",
    "Oppression - lake over water: These are trying times with seemingly intractable problems and little progress. Face this time of adversity with calmness and equanimity. Take the time to self-assess.",
    "Change - lake over fire: Changes are underway. Analyze your motives and instill the necessary change of heart that will set things in motion. By acting selflessly, success is assured.",
    "The cauldron - fire over wind: Nourish what is good within yourself for the benefit of society at large.",
    "The arousing - thunder over thunder: Do not be shaken off course by externalities; if you are, take a long, hard look at yourself and correct any deficiencies you see. The truly powerful person is unmoved by such occurrences, being in complete harmony with the laws of the universe.",
    "Keeping still - mountain over mountain: What is needed is a calm observation. It is not possible to be still with strong emotions, so abandon them. Know when to lie, and when to act.",
    "Development - wind over mountain: Your goal may seem a long way off but with patience and diligence you will achieve it. Keep at it.",
    "Marrying maiden - thunder over lake: To act on desires is to fail to follow the right principles. There will always be desires and problems in relationships but by following proper conduct their effects will be minimal.",
    "Abundance - thunder over fire: Live for the present, and make the most of this time of abundance and influence to achieve great gains.",
    "The wanderer - fire over mountain: The best way to proceed is to stay alert, cautious, reserved and respectful of others that you meet. Follow your instincts and avoid the cultivation of unnecessary emotional attachments.",
    "Gentle - wind over wind: Gently overcome any impasses that are in your way. Be consistent and have well-defined goals to focus on. This way changes will have long term and far-reaching effects.",
    "The joyous - lake over lake: To make life better we must have this or must do that, but the material gains do not bring lasting joy as there will always be something else to have or do. I Ching says that to be fulfilled we need to devote ourselves to the principles of humility, detachment, modesty and acceptance.",
    "Dispersal - wind over water: Be like a warm spring wind which blows gently but with great persistence over the winter ice, gradually melting it and allowing the river to flow freely again.",
    "Restraint - water over lake: If you know and respect your personal limits, you will have greater freedom of expression within them. It is wise to restrain the desires and fears that are the cause of troubled thinking.",
    "Inner truth - wind over lake: It is not possible to reach any kind of understanding if we indulge in such feelings as pride, anger, or self-pity. I Ching counsels us to leave emotional responses behind and to try to understand the truth of a situation.",
    "Great smallness - thunder over mountain: When faced with a difficult circumstance it is tempting to be aggressive, but acting this way will only make things worse. Better to follow a course of patient non-action, relying on the principles of humility, modesty, and acceptance. Difficulties will eventually reappear; they are a part of the natural order of things.",
    "Completion - water over fire: Out of chaos comes order. This can quickly change. Avoid complacency, don't forget what got you this far. It is necessary to be on guard against falling into chaos again.",
    "Before completion - fire over water: During times of renewal and transformation, there is intense pressure to succeed but, to get anywhere worthwhile, you need to proceed carefully, affirming devotion to higher principles."
  ];

  export default fortunes;