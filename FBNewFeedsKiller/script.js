var quoteList = [
		{
			"quote" : "Con đường trải đầy lụa không bao giờ dẫn tới vinh quang.",
			"source" : "La Fontaine"
		},
		{
			"quote" : "Ai chiến thắng mà không hề chiến bại. Ai nên khôn mà chẳng dại đôi lần.",
			"source" : "Khuyết danh"
		},
		{
			"quote" : "Đừng phấn đấu để thành công mà hãy phấn đấu để mình có ích.",
			"source" : "Albert Einstein"
		},
		{
			"quote": "Để thành công trong cuộc sống, bạn cần hai thứ: sự ngu dốt và lòng tự tin.",
			"source": "Mark Twain"
		},
		{
			"quote": "Tôi chưa thất bại. Tôi chỉ là đã tìm ra 10,000 cách không hoạt động.",
			"source": "Thomas Edison"
		},
		{
			"quote": "Không biết đã bao nhiêu lần con người buông tay từ bỏ khi mà chỉ một chút nỗ lực, một chút kiên trì nữa thôi là anh ta sẽ đạt được thành công.",
			"source": "Elbert Hubbard"
		},
		{
			"quote": "Để thành công, bạn phải sẵn lòng thất bại.",
			"source": "Frank Tyger"
		},
		{
			"quote": "Thành công không phải là cuối cùng, thất bại không phải là chết người: lòng can đảm đi tiếp mới quan trọng.",
			"source": "Winston Churchill"
		},
		{
			"quote": "Thành công không phải là chìa khóa mở cánh cửa hạnh phúc. Hạnh phúc là chìa khóa dẫn tới cánh cửa thành công. Nếu bạn yêu điều bạn đang làm, bạn sẽ thành công.",
			"source": "Albert Schweitzer"
		},
		{
			"quote": "Nấc thang thành công không quan tâm ai đang trèo nó.",
			"source": "Frank Tyger"
		},
	];

var selectedQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

var quoteDiv, quoteText, quoteSource;

quoteDiv = $("<div class='nfe-quote'/>");

quoteText = $("<p>“" + selectedQuote.quote + "”</p>")
		.addClass('nfe-quote-text')
		.appendTo(quoteDiv);

quoteSource = $("<p>~ " + selectedQuote.source + "</p>")
		.addClass('nfe-quote-source')
		.appendTo(quoteDiv);

// This delay ensures that the elements have been created by Facebook's
// scripts before we attempt to replace them
setInterval(function(){
	// Replace the news feed
	$("div[id^='topnews_main_stream']").replaceWith(quoteDiv);
}, 1000);
