plugin.onAllPluginsLoaded(plugins => plugins.StylesheetLoader.loadStylesheet(
    plugin,
    `${this.pluginPath}/theme.css`,
    "BetterMoTheme",
    {
        use_BGEnhanced: {
            name: "使用BGEnhanced",
            type: "checkbox",
            reflect: "bodyFlag",
            class: "BetterMoTheme-use_BGEnhanced",
            default: false
        },
        use_refinedNowPlaying: {
            name: "使用RefinedNowPlaying",
            class: "BetterMoTheme-use_refinedNowPlaying",
            type: "checkbox",
            reflect: "bodyFlag",
            default: false
        },
        background_image: {
            name: "背景-图片",
            key: "--BetterMoTheme-background_image",
            reflect: "cssVar",
            type: "cssBackground",
            default: "url(https://img.noobzone.ru/getimg.php?url=https://i.imgur.com/ejzQz7n.png)"
        },
        background_brightness: {
            name: "背景-亮度",
            key: "--BetterMoTheme-background_brightness",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "100%"
        },
        background_saturate: {
            name: "背景-饱和度",
            key: "--BetterMoTheme-background_saturate",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "100%"
        },
        background_blur: {
            name: "背景-模糊度",
            key: "--BetterMoTheme-background_blur",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "0px"
        },
        background_scale: {
            name: "背景-缩放（解决背景模糊后边框问题）",
            key: "--BetterMoTheme-background_scale",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "100%"
        },
        bottomMusicBar_rainbowStrip: {
            name: "底部音乐栏-彩虹条",
            class: "BetterMoTheme-bottomMusicBar_rainbowStrip",
            type: "checkbox",
            reflect: "bodyFlag",
            default: true
        },
        bottomMusicBar_dockMode: {
            name: "底部音乐栏-悬浮模式",
            class: "BetterMoTheme-bottomMusicBar_dockMode",
            type: "checkbox",
            reflect: "bodyFlag",
            default: false
        },
        bottomMusicBar_radius: {
            name: "底部音乐栏-圆角大小",
            key: "--BetterMoTheme-bottomMusicBar_radius",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "8px"
        },
        bottomMusicBar_backgroundBlur: {
            name: "底部音乐栏-背景模糊度",
            key: "--BetterMoTheme-bottomMusicBar_backgroundBlur",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "16px"
        },
        bottomMusicBar_backgroundSaturate: {
            name: "底部音乐栏-背景饱和度",
            key: "--BetterMoTheme-bottomMusicBar_backgroundSaturate",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "120%"
        },
        bottomMusicBar_backgroundColor: {
            name: "底部音乐栏-背景颜色",
            key: "--BetterMoTheme-bottomMusicBar_backgroundColor",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "rgba(255, 255, 255, 0.2)"
        },
        popWindow_radius: {
            name: "弹窗-圆角大小",
            key: "--BetterMoTheme-popWindow_radius",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "8px"
        },
        popWindow_backgroundBlur: {
            name: "弹窗-背景模糊度",
            key: "--BetterMoTheme-popWindow_backgroundBlur",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "24px"
        },
        popWindow_backgroundSaturate: {
            name: "弹窗-背景饱和度",
            key: "--BetterMoTheme-popWindow_backgroundSaturate",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "120%"
        },
        popWindow_backgroundColor: {
            name: "弹窗-背景颜色",
            key: "--BetterMoTheme-popWindow_backgroundColor",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "rgba(255, 255, 255, 0.2)"
        },
        other_radius: {
            name: "其他-圆角大小",
            key: "--BetterMoTheme-other_radius",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "8px"
        },
        other_backgroundBlur: {
            name: "其他-背景模糊度",
            key: "--BetterMoTheme-other_backgroundBlur",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "24px"
        },
        other_backgroundSaturate: {
            name: "其他-背景饱和度",
            key: "--BetterMoTheme-other_backgroundSaturate",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "120%"
        },
        other_backgroundColor: {
            name: "其他-背景颜色",
            key: "--BetterMoTheme-other_backgroundColor",
            reflect: "cssVar",
            type: "cssInput",   // 并没有，随便写的
            default: "rgba(255, 255, 255, 0.2)"
        }
    }
));

// 评论按钮
const owo = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.target.classList.contains("z-show")) {
            document.querySelector(".g-singlec-comment-detail").classList.add("z-show");
        } else {
            if (!document.body.classList.contains("BetterMoTheme-use_refinedNowPlaying")) {
                document.querySelector(".g-singlec-comment-detail").classList.remove("z-show");
            }
        }
    }
});

// 上升
const up = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.classList.contains("g-single")) {
                document.querySelector(".better-ncm-manager").classList.add("topqwq");
                document.querySelector(".g-sd").classList.add("topqwq");
                document.querySelector(".g-mn").classList.add("topqwq");
                document.querySelector(".g-ft").classList.add("topqwq");
                up.disconnect();
                down.observe(document.querySelector(".g-single"), { attributes: true });
                owo.observe(document.querySelector(".g-singlec-comment-top"), { attributes: true });
            }
        }
    }
});

// 下落
const down = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (!mutation.target.classList.contains("z-show")) {
            document.querySelector(".better-ncm-manager").classList.remove("topqwq");
            document.querySelector(".g-sd").classList.remove("topqwq");
            document.querySelector(".g-mn").classList.remove("topqwq");
            document.querySelector(".g-ft").classList.remove("topqwq");
            up.observe(document.body, { childList: true });
            down.disconnect();
            owo.disconnect();
        }
    }
});

const owohidden = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        if (mutation.target.classList.contains("mq-playing")) {
            document.querySelector(".g-singlec-comment-detail").remove()
            var detail = document.createElement("div")
            detail.innerHTML = `<div class="g-singlec-comment-detail j-flag" data-res-action="opencomment" data-res-id="522749811" data-res-type="4"> <svg><use xlink:href="orpheus://orpheus/style/res/svg/icon.sp.svg#icon24_edit_detail"></use></svg> 快来说点什么吧 </div>`
            document.querySelector(".g-singlec-live").after(detail)
            owohidden.disconnect()
        }
    }
});

window.onload = function ULH() {
    var user = document.querySelector(".user").style
    document.querySelector(".cover a").addEventListener("click",()=>{
        user.opacity = "0"
        user.pointerEvents = "none"
    })
    document.querySelector(".zoom[title='收起音乐详情页']").addEventListener("click",()=>{
        user.opacity = "1"
        user.pointerEvents = "all"
    })
}

owohidden.observe(document.body, { attributes: true })
up.observe(document.body, { childList: true });
