// TOEIC Parts 5 & 6 — Conjunctions Quiz Builder
// Run this script from script.google.com to auto-generate the Google Form quiz.
// Steps: 1) Go to script.google.com  2) Paste this script  3) Click Run > createQuiz

function createQuiz() {

  const form = FormApp.create('TOEIC Parts 5 & 6 — Conjunctions Quiz (B1)');
  form.setIsQuiz(true);
  form.setTitle('TOEIC Parts 5 & 6 — Conjunctions Quiz (B1)');
  form.setDescription(
    'This quiz covers linking words and conjunctions tested in TOEIC Parts 5 and 6, ' +
    'including contrast, addition, cause, result, and purpose connectors. Level: B1.'
  );
  form.setShowLinkToRespondAgain(true);

  const questions = [
    // ── PART 5 ──────────────────────────────────────────────────────────────
    {
      part: 5,
      q: 'The new software update improved performance, _____ it also introduced a minor display issue.',
      opts: ['so', 'since', 'however', 'but'],
      ans: 'however',
      exp: '"However" contrasts two ideas formally — typical of TOEIC Part 5. "But" also works but is less formal.'
    },
    {
      part: 5,
      q: '_____ the weather was bad, the outdoor event went ahead as planned.',
      opts: ['Because', 'Therefore', 'Although', 'So that'],
      ans: 'Although',
      exp: '"Although" introduces a contrast between bad weather and the event continuing.'
    },
    {
      part: 5,
      q: 'She worked hard all year; _____, she received a promotion.',
      opts: ['although', 'as a result', 'despite', 'whereas'],
      ans: 'as a result',
      exp: '"As a result" shows a consequence — working hard led to the promotion.'
    },
    {
      part: 5,
      q: 'The manager approved the budget _____ the team could begin the project immediately.',
      opts: ['so that', 'despite', 'however', 'whereas'],
      ans: 'so that',
      exp: '"So that" expresses purpose — the budget was approved with the aim of starting the project.'
    },
    {
      part: 5,
      q: 'Sales figures rose in Q1 _____ they dropped sharply in Q2.',
      opts: ['because', 'whereas', 'so', 'additionally'],
      ans: 'whereas',
      exp: '"Whereas" directly contrasts two opposite situations.'
    },
    {
      part: 5,
      q: '_____ his lack of experience, he performed surprisingly well in the interview.',
      opts: ['Although', 'Despite', 'Because', 'However'],
      ans: 'Despite',
      exp: '"Despite" is followed by a noun phrase. "Although" needs a full clause.'
    },
    {
      part: 5,
      q: 'The project was delayed; _____, the final result exceeded expectations.',
      opts: ['so', 'nevertheless', 'as', 'due to'],
      ans: 'nevertheless',
      exp: '"Nevertheless" means "despite that" — it links two contrasting ideas across sentences.'
    },
    {
      part: 5,
      q: 'Costs increased _____ a rise in raw material prices.',
      opts: ['so that', 'due to', 'whereas', 'nevertheless'],
      ans: 'due to',
      exp: '"Due to" is followed by a noun and indicates cause.'
    },
    {
      part: 5,
      q: 'We need to reduce expenses; _____, we should look at the marketing budget first.',
      opts: ['despite', 'although', 'therefore', 'while'],
      ans: 'therefore',
      exp: '"Therefore" introduces a logical recommendation or conclusion.'
    },
    {
      part: 5,
      q: '_____ the new policy saves money, it may reduce employee satisfaction.',
      opts: ['So', 'While', 'Because of', 'Thus'],
      ans: 'While',
      exp: '"While" (meaning "although") contrasts the financial benefit with a potential downside.'
    },
    {
      part: 5,
      q: 'The conference was interesting; _____, it ran over time.',
      opts: ['therefore', 'unfortunately', 'while', 'as a result'],
      ans: 'unfortunately',
      exp: '"Unfortunately" signals a negative development — a common attitude connector in TOEIC.'
    },
    {
      part: 5,
      q: '_____ finish the report, we stayed late in the office.',
      opts: ['So that', 'In order to', 'Because', 'Although'],
      ans: 'In order to',
      exp: '"In order to" expresses purpose and is followed by a base verb.'
    },
    {
      part: 5,
      q: 'The team worked efficiently; _____ they met the deadline two days early.',
      opts: ['despite', 'however', 'consequently', 'whereas'],
      ans: 'consequently',
      exp: '"Consequently" is a result connector — working efficiently led directly to meeting the deadline early.'
    },
    {
      part: 5,
      q: 'He joined the gym _____ lose weight before the summer.',
      opts: ['so that', 'so as to', 'because', 'while'],
      ans: 'so as to',
      exp: '"So as to" expresses purpose and is followed by a base verb.'
    },
    {
      part: 5,
      q: 'The report was well-written; _____, the data contained several errors.',
      opts: ['therefore', 'however', 'since', 'also'],
      ans: 'however',
      exp: '"However" introduces a contrasting point about the same document.'
    },
    {
      part: 5,
      q: '_____ she had prepared carefully, she felt nervous before the presentation.',
      opts: ['Because', 'Even though', 'Therefore', 'As a result'],
      ans: 'Even though',
      exp: '"Even though" concedes a fact while contrasting it with the result.'
    },
    {
      part: 5,
      q: 'The company expanded rapidly _____ the economic downturn.',
      opts: ['because', 'in spite of', 'so that', 'nevertheless'],
      ans: 'in spite of',
      exp: '"In spite of" + noun shows the expansion happened despite the difficulty.'
    },
    {
      part: 5,
      q: 'Prices are lower online _____ in the high-street shops.',
      opts: ['despite', 'instead of', 'whereas', 'as well as'],
      ans: 'instead of',
      exp: '"Instead of" compares two alternatives — buying online vs. in shops.'
    },
    {
      part: 5,
      q: '_____, she admitted that the project could have been better planned.',
      opts: ['Eventually', 'Personally', 'Furthermore', 'Unless'],
      ans: 'Personally',
      exp: '"Personally" expresses a subjective opinion — a development/attitude connector.'
    },
    {
      part: 5,
      q: 'The new strategy worked well; _____, profits grew by 15%.',
      opts: ['however', 'indeed', 'despite', 'so that'],
      ans: 'indeed',
      exp: '"Indeed" reinforces or confirms what was just stated.'
    },
    {
      part: 5,
      q: 'We need to hire more staff. _____, we should upgrade the equipment.',
      opts: ['However', 'In addition', 'Despite', 'Because'],
      ans: 'In addition',
      exp: '"In addition" adds a supplementary point to the previous statement.'
    },
    {
      part: 5,
      q: 'She submitted the report on time _____ the power cut that morning.',
      opts: ['because', 'despite', 'so', 'while'],
      ans: 'despite',
      exp: '"Despite" + noun phrase shows an obstacle did not prevent the action.'
    },
    {
      part: 5,
      q: 'The product is affordable; _____, it is of high quality.',
      opts: ['however', 'although', 'moreover', 'since'],
      ans: 'moreover',
      exp: '"Moreover" adds a further positive quality — an extra information connector.'
    },
    {
      part: 5,
      q: '_____ cutting costs, the company also aims to increase revenue.',
      opts: ['Instead of', 'Not only... but also', 'Despite', 'While'],
      ans: 'Not only... but also',
      exp: '"Not only... but also" pairs two complementary actions or qualities.'
    },
    {
      part: 5,
      q: 'The CEO resigned _____ allegations of financial misconduct.',
      opts: ['so that', 'because of', 'whereas', 'in order to'],
      ans: 'because of',
      exp: '"Because of" + noun gives a cause. Note: "because" would need a full clause.'
    },
    {
      part: 5,
      q: '_____ the new regulations, all staff must complete safety training.',
      opts: ['In spite of', 'According to', 'Therefore', 'Although'],
      ans: 'According to',
      exp: '"According to" references a rule or source — common in formal TOEIC texts.'
    },
    {
      part: 5,
      q: 'The office will be closed on Friday; _____, you should plan accordingly.',
      opts: ['nevertheless', 'therefore', 'although', 'despite'],
      ans: 'therefore',
      exp: '"Therefore" introduces a logical consequence or action to take.'
    },
    {
      part: 5,
      q: 'Sales were strong in Europe _____ they were weak in Asia.',
      opts: ['because', 'whereas', 'so', 'in order to'],
      ans: 'whereas',
      exp: '"Whereas" contrasts two directly opposed situations.'
    },
    {
      part: 5,
      q: 'The project succeeded _____ the limited budget.',
      opts: ['because', 'in spite of', 'so that', 'while'],
      ans: 'in spite of',
      exp: '"In spite of" + noun shows success happened despite the obstacle.'
    },
    {
      part: 5,
      q: 'The product was launched on time _____ several technical problems.',
      opts: ['despite', 'because', 'therefore', 'while'],
      ans: 'despite',
      exp: '"Despite" + noun shows the launch succeeded despite the problems.'
    },

    // ── PART 6 ──────────────────────────────────────────────────────────────
    {
      part: 6,
      context: '[Email — HR Department to All Staff]\n\n' +
               'We are introducing a new flexible working policy.',
      q: '_____ (Q31), employees may now choose to work from home up to two days per week.',
      opts: ['However', 'Furthermore', 'Unless', 'Despite'],
      ans: 'Furthermore',
      exp: '"Furthermore" introduces an additional positive development following the policy announcement.'
    },
    {
      part: 6,
      context: '[Email — HR Department to All Staff]\n\n' +
               'The new flexible working policy is now in effect.',
      q: 'Attendance at team meetings remains mandatory, _____ (Q32) they are held remotely.',
      opts: ['even if', 'so that', 'because of', 'in addition'],
      ans: 'even if',
      exp: '"Even if" — attendance is required regardless of whether meetings are remote.'
    },
    {
      part: 6,
      context: '[Report — Q3 Performance Review]\n\n' +
               'Overall sales increased by 8% this quarter.',
      q: '_____ (Q33), the Western region recorded a 12% decline.',
      opts: ['Therefore', 'However', 'Since', 'Also'],
      ans: 'However',
      exp: '"However" introduces a contrasting negative fact after the positive overall result.'
    },
    {
      part: 6,
      context: '[Report — Q3 Performance Review]\n\n' +
               'The Western region recorded a 12% decline.',
      q: 'The decline was _____ (Q34) a drop in consumer confidence following recent price increases.',
      opts: ['so that', 'due to', 'although', 'whereas'],
      ans: 'due to',
      exp: '"Due to" + noun phrase gives the cause of the decline.'
    },
    {
      part: 6,
      context: '[Memo — Upcoming Training Day]\n\n' +
               'All employees are required to attend the training session on 14 May.',
      q: '_____ (Q35), transport will be provided from the main office.',
      opts: ['However', 'Additionally', 'Despite', 'Whereas'],
      ans: 'Additionally',
      exp: '"Additionally" adds a positive extra detail — transport — to the training announcement.'
    },
    {
      part: 6,
      context: '[Memo — Upcoming Training Day]\n\n' +
               'The training session on 14 May is compulsory.',
      q: 'Please note that the session will proceed _____ (Q36) you have a pre-approved absence.',
      opts: ['so that', 'even if', 'because', 'nevertheless'],
      ans: 'even if',
      exp: '"Even if" — the session goes ahead regardless of any absence.'
    },
    {
      part: 6,
      context: '[Customer Letter]\n\n' +
               'Thank you for your recent purchase.',
      q: '_____ (Q37), we would like to inform you of a slight delay in delivery.',
      opts: ['Furthermore', 'Unfortunately', 'In order to', 'Whereas'],
      ans: 'Unfortunately',
      exp: '"Unfortunately" signals negative news politely — very common in formal business English.'
    },
    {
      part: 6,
      context: '[Customer Letter]\n\n' +
               'We apologise for the inconvenience caused by the delay.',
      q: 'The delay occurred _____ (Q38) an unexpected issue with our supplier.',
      opts: ['so that', 'because of', 'although', 'however'],
      ans: 'because of',
      exp: '"Because of" + noun explains the cause of the delay.'
    },
    {
      part: 6,
      context: '[Business Proposal]\n\n' +
               'Our new product offers several advantages. First, it is cost-effective.',
      q: '_____ (Q39), it requires minimal maintenance.',
      opts: ['However', 'Moreover', 'Despite', 'Consequently'],
      ans: 'Moreover',
      exp: '"Moreover" adds a further positive quality to the list of advantages.'
    },
    {
      part: 6,
      context: '[Business Proposal]\n\n' +
               'Our product delivers outstanding value for money.',
      q: 'We believe this product will increase your efficiency _____ (Q40) reduce operating costs.',
      opts: ['despite', 'as well as', 'whereas', 'since'],
      ans: 'as well as',
      exp: '"As well as" combines two benefits — a typical structure in business proposals.'
    },

    // ── PART 5 continued ────────────────────────────────────────────────────
    {
      part: 5,
      q: 'The training session was useful; _____, it could have been shorter.',
      opts: ['therefore', 'however', 'since', 'also'],
      ans: 'however',
      exp: '"However" introduces a contrasting opinion about the session.'
    },
    {
      part: 5,
      q: 'We reduced the price _____ attract more customers.',
      opts: ['so that', 'in order to', 'because', 'although'],
      ans: 'in order to',
      exp: '"In order to" + base verb expresses purpose.'
    },
    {
      part: 5,
      q: '_____ his experience, he struggled with the new software.',
      opts: ['Although', 'Despite', 'Because', 'Since'],
      ans: 'Despite',
      exp: '"Despite" + noun shows a contrast between his experience and the difficulty faced.'
    },
    {
      part: 5,
      q: 'The team finished early; _____, they started the next phase immediately.',
      opts: ['however', 'consequently', 'despite', 'while'],
      ans: 'consequently',
      exp: '"Consequently" introduces a result — finishing early led to starting the next phase.'
    },
    {
      part: 5,
      q: 'She is fluent in English _____ French.',
      opts: ['instead of', 'as well as', 'despite', 'whereas'],
      ans: 'as well as',
      exp: '"As well as" adds an additional item in the same category.'
    },
    {
      part: 5,
      q: 'The product was launched on time _____ several technical problems.',
      opts: ['because', 'in spite of', 'therefore', 'while'],
      ans: 'in spite of',
      exp: '"In spite of" + noun shows the launch succeeded despite the obstacles.'
    },
    {
      part: 5,
      q: 'The report is comprehensive; _____, it covers all the key data points.',
      opts: ['however', 'indeed', 'despite', 'whereas'],
      ans: 'indeed',
      exp: '"Indeed" reinforces the positive quality already mentioned.'
    },
    {
      part: 5,
      q: 'Sales are strong in summer; _____, winter figures remain low.',
      opts: ['therefore', 'nevertheless', 'since', 'although'],
      ans: 'nevertheless',
      exp: '"Nevertheless" contrasts the low winter figures with the strong summer performance.'
    },
    {
      part: 5,
      q: 'The company grew rapidly _____ it invested heavily in marketing.',
      opts: ['despite', 'because', 'whereas', 'in spite of'],
      ans: 'because',
      exp: '"Because" + clause gives the reason for the company\'s growth.'
    },
    {
      part: 5,
      q: 'The new policy will save money. _____, it will improve staff morale.',
      opts: ['However', 'Furthermore', 'Despite', 'Whereas'],
      ans: 'Furthermore',
      exp: '"Furthermore" adds an additional benefit — a typical extra information connector.'
    },
  ];

  // ── Build each question in the form ───────────────────────────────────────
  questions.forEach(function(data, index) {

    // Section header for Part 6 context passages
    if (data.context) {
      var section = form.addSectionHeaderItem();
      section.setTitle('Part 6 — Question ' + (index + 1));
      section.setHelpText(data.context);
    }

    var item = form.addMultipleChoiceItem();
    item.setTitle('Q' + (index + 1) + ' [Part ' + data.part + ']  ' + data.q);
    item.setRequired(true);

    // Build choices — mark the correct one
    var choices = data.opts.map(function(opt) {
      var isCorrect = (opt === data.ans);
      return item.createChoice(opt, isCorrect);
    });
    item.setChoices(choices);

    // Set points and feedback
    item.setPoints(2);

    var correctFeedback = FormApp.createFeedback()
      .setText('✓ Correct! ' + data.exp)
      .build();

    var incorrectFeedback = FormApp.createFeedback()
      .setText('✗ The correct answer is: ' + data.ans + '. ' + data.exp)
      .build();

    item.setFeedbackForCorrect(correctFeedback);
    item.setFeedbackForIncorrect(incorrectFeedback);
  });

  // ── Final settings ────────────────────────────────────────────────────────
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setPublishingSummary(true);

  Logger.log('Quiz created! Open it here: ' + form.getEditUrl());
  Logger.log('Shareable link for students: ' + form.getPublishedUrl());

  // Show links in a popup
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  SpreadsheetApp.openById; // not needed — use Logger output
  Browser.msgBox(
    'Quiz created successfully!',
    'Edit URL:\n' + form.getEditUrl() +
    '\n\nStudent link:\n' + form.getPublishedUrl(),
    Browser.Buttons.OK
  );
}
