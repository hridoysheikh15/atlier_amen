$("#billing_address").hide();

$(document).ready(function () {
    // Trigger the aos animation
    AOS.init();

    // title view animation
    $(".page-title").removeClass("onload");

    // get billing address form
    $("#billing_form").on("click", function (e) {
        let checkbox = $("#billing_form")[0];

        if (checkbox.checked) {
            $("#billing_address").hide('slow');
        } else {
            $("#billing_address").show('slow');

        }
    })

    $("scroll-up-anim").on("click", function () {
        let animate = $("animate-to-scroll")

        animate.removeClass("scroll-up-anim");
        void animate[0].offsetWidth;
        animate.addClass("scroll-up-anim");
    })

    // $('.thumb').on('click', function () {
    //     const type = $(this).data('type');
    //     const video = $('#video_previewer');
    //     const img = $('#img_previewer');
    //     const youtube = $('#youtube_previewer');

    //     // Remove active class from all, add to clicked
    //     $('.thumb').removeClass('active');
    //     $(this).addClass('active');

    //     // Hide all previews with fade
    //     $('.indi-img-preview').fadeOut(0, function () {
    //         $(this).hide();
    //     });

    //     if (type == 'video') {
    //         const src = $(this).find('video').attr('src');
    //         video.attr('src', src).attr('hidden', false).show().fadeIn(300)[0].play();
    //     } else if (type == 'img') {
    //         const src = $(this).find('img').attr('src');
    //         img.attr('src', src).attr('hidden', false).show().fadeIn(300);
    //     } else if (type == 'youtube') {
    //         const ytSrc = $(this).data('youtube') + "?autoplay=1";
    //         youtube.attr('src', ytSrc).attr('hidden', false).show().fadeIn(300);
    //     }

    //     // Stop video and YouTube when switching
    //     video[0].pause();
    //     video.attr('src', '');
    //     youtube.attr('src', '');
    // });

    $('#img_previewer').hide();
});


// set preview image with scroll-up animation
function setPreviewImg(get, type) {
    let preview = $(".indi-img-preview");
    let src = $(get).attr("src");

    switch (type) {
        case 'img':
            $('#video_previewer').hide();
            $('#img_previewer').show();
            break;

        case 'video':
            $('#img_previewer').hide();
            $('#video_previewer').show();
            break;

        default:
            $('#video_previewer').hide();
            $('#img_previewer').show();
            break;
    }

    $(".indi-img-gallery div div div").removeClass("active");
    $(get).parent().addClass("active");

    preview.attr("src", src);
    preview.removeClass("scroll-up-anim");
    void preview[0].offsetWidth;
    preview.addClass("scroll-up-anim");
}
