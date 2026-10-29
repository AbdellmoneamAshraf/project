const products = [
    {
        id: 1,
        Image: "./imgs/1690276294_header-6.png",
        Image2:"./imgs/portfolio-4.webp"
    },
    {
        id: 2,
        Image: "./imgs/1686995326_hero-12.png",
        Image2:"./imgs/400.webp"
    },
    {
        id: 3,
        Image: "./imgs/1686996492_hero-16.png",
        Image2:"./imgs/portfolio-2.webp"
    },
    {
        id: 4,
        Image: "./imgs/1689776107_testimonial-6.png",
        Image2:"./imgs/portfolio-3.webp"
    },
    {
        id: 5,
        Image: "./imgs/1686992311_hero-3.png",
        Image2:"./imgs/portfolio-5.webp"
    },
    {
        id: 6,
        Image: "./imgs/1686914026_testimonial-2.png",
        Image2:"./imgs/portfolio-6.webp"
    }
];
const datels = [
    {
        idd: 1,
        label: "Breakthrough",
        subtitle: "Next-gen solutions",
        title: "Pioneering Digital Craft",
        description: "Quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi laboriosam.",
        ImageB: "./imgs/features-4.webp",
        points: [
            "Quos dolores eos qui ratione voluptatem sequi nesciunt.",
            "Temporibus autem quibusdam et aut officiis.",
            "Sed ut perspiciatis unde omnis iste natus."
        ]
    },
    {
        idd: 2,
        label: "Protection",
        subtitle: "Robust safeguards",
        title: "Enterprise-Grade Defense",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid commodi consequatur.",
        ImageB: "./imgs/features-2.webp",
        points: [
            "Quis autem vel eum iure reprehenderit voluptate.",
            "Temporibus autem quibusdam et aut officiis.",
            "Sed ut perspiciatis unde omnis iste natus."
        ]
    },
    {
        idd: 3,
        label: "Velocity",
        subtitle: "Blazing fast delivery",
        title: "Optimized For Speed",
        description: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        ImageB: "./imgs/features-6.webp",
        points: [
            "Quis autem vel eum iure reprehenderit voluptate.",
            "Temporibus autem quibusdam et aut officiis.",
            "Sed ut perspiciatis unde omnis iste natus."
        ]
    },
    {
        idd: 4,
        label: "Assistance",
        subtitle: "Round-the-clock help",
        title: "Dedicated Care Team",
        description: "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        ImageB: "./imgs/features-1.webp",
        points: [
            "Quis autem vel eum iure reprehenderit voluptate.",
            "Temporibus autem quibusdam et aut officiis.",
            "Sed ut perspiciatis unde omnis iste natus."
        ]
    },
];

const featureButtons = document.querySelector("#feature-buttons");
const featureImage = document.querySelector("#feature-image");
const featureTag = document.querySelector("#feature-tag");
const featureTitle = document.querySelector("#feature-title");
const featureDescription = document.querySelector("#feature-description");
const featurePoints = document.querySelector("#feature-points");

function changeFeature(id) {
    const feature = datels.find(item => item.idd === id) || datels[3];

    featureButtons.querySelectorAll("button").forEach(button => {
        const isActive = Number(button.dataset.id) === id;
        button.className = [
            "flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300",
            isActive
                ? "border-slate-800 bg-white text-slate-900 shadow-md"
                : "border-slate-200 bg-slate-50/80 text-slate-700 hover:border-slate-300 hover:bg-white"
        ].join(" ");
    });

    featureImage.src = feature.ImageB;
    featureTag.textContent = feature.label;
    featureTitle.textContent = feature.title;
    featureDescription.textContent = feature.description;
    featurePoints.innerHTML = feature.points.map(point => `
        <li class="flex items-start gap-3">
            <span class="mt-1 text-emerald-500">✓</span>
            <span>${point}</span>
        </li>
    `).join("");
}

const productconainer = document.querySelector(".section-one");
const productconainer2 = document.querySelector(".imgs");

featureButtons.innerHTML = datels.map(feature => `
    <button type="button" data-id="${feature.idd}" onclick="changeFeature(${feature.idd})"
        class="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-left transition-all duration-300 hover:border-slate-300 hover:bg-white">
        <span class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-700">
            ${feature.label.charAt(0)}
        </span>
        <span>
            <span class="block text-2xl font-semibold text-slate-900">${feature.label}</span>
            <span class="block text-sm text-slate-500">${feature.subtitle}</span>
        </span>
    </button>
`).join("");

changeFeature(4);

// ---------------------------------------------------------------------------------------------------------
products.forEach(product=> productconainer.innerHTML+= `<article class="conters items-center shadow rounded-xl bg-white">
                <div class="img-card">
                    <img src="${product.Image2}" alt="Product dashboard preview" class="rounded-t-xl w-full h-auto object-cover">
                </div>
                <div class="titaill-card p-5 flex flex-col gap-5 font-serif text-sm">
                    <h4>Top Feature Of SpeedyUi Templates</h4>
                    <p class="text-gray-600">Hey there, welcome to SpeedyUI! 🚀 We've got an awesome collection of
                        HTML components built using various CSS frameworks like bootstrap, tailwindCSS to help you
                        build your web page faster. Whether you're looking to redesign your existing site with new
                        sections or embark on a fresh web design journey, our responsive components have got you
                        covered. So, let your creativity flow and create something amazing with SpeedyUI's HTML
                        components!</p>
                </div>
                <div class="icons-content" aria-label="Feature icons"></div>
            </article>`)
            // ---------------------------------------------------------------
            products.forEach(product=> productconainer2.innerHTML+=`<div class="infermation items-center hover:shadow hover:-translate-y-2 transition-all duration-300 rounded-xl bg-white overflow-hidden">
                   <img src="${product.Image}" alt="">
                </div>`)
                // --------------------------------------------------------
                