const quotes = [
    { text: "من جدّ وجد ومن زرع حصد.", author: "مثل عربي" },
    { text: "العقل زينة.", author: "مثل عربي" },
    { text: "في التأني السلامة وفي العجلة الندامة.", author: "مثل عربي" },
    { text: "الحكمة ضالة المؤمن.", author: "علي بن أبي طالب" },
    { text: "الوقت كالسيف إن لم تقطعه قطعك.", author: "مثل عربي" },
    { text: "العلم نور.", author: "الإمام الشافعي" },
    { text: "كل إناء بما فيه ينضح.", author: "مثل عربي" },
    { text: "إذا لم تستحِ فاصنع ما شئت.", author: "غير معلوم حاليا" },
    { text: "المال خادم جيد لكنه سيد فاسد.", author: "مثل عربي" },
    { text: "العين بالعين والسن بالسن.", author: "حكم من احكام الشريعة الاسلامية" }
];

const quotesContainer = document.getElementById('quotes');

quotes.forEach((quote, index) => {
    const quoteCard = document.createElement('div');
    quoteCard.className = 'quote-card';

    const quoteText = document.createElement('div');
    quoteText.className = 'quote-text';
    quoteText.textContent = quote.text;

    const quoteAuthor = document.createElement('div');
    quoteAuthor.className = 'quote-author';
    quoteAuthor.textContent = `- ${quote.author}`;

    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'أضف تعليقك...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'إرسال';

    const commentsContainer = document.createElement('div');
    commentsContainer.className = 'comments';

    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const comment = document.createElement('div');
            comment.textContent = commentText;
            commentsContainer.appendChild(comment);
            commentInput.value = '';
        }
    });

    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);

    quoteCard.appendChild(quoteText);
    quoteCard.appendChild(quoteAuthor);
    quoteCard.appendChild(commentSection);
    quoteCard.appendChild(commentsContainer);

    quotesContainer.appendChild(quoteCard);
});
