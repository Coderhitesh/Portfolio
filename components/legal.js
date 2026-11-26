import { profile, business, services, payment, formatINR } from "./data";

export const LEGAL_UPDATED = "26 November 2026";
const contact = `${profile.email} · ${profile.phone} · ${business.address}`;

export const privacy = {
  route: "/privacy-policy",
  title: "Privacy Policy",
  intro: `This Privacy Policy explains how ${business.name} (“I”, “me”, “my”) collects, uses and protects your personal information when you visit this website, contact me or pay for my services online.`,
  sections: [
    {
      h: "Information I collect",
      p: ["I only collect what is needed to talk to you, deliver work and take payments:"],
      list: [
        "Contact details — your name, email address and phone number, when you fill in the payment form or email/call me.",
        "Project information — requirements, files or notes you choose to share with me.",
        `Payment information — payments are processed by ${payment.gateway}. I receive only the order ID, payment ID, amount, status and payment method type. I never see or store your full card number, CVV, UPI PIN or netbanking credentials.`,
        "Technical data — IP address, browser type, device and pages visited, collected through standard server logs.",
      ],
    },
    {
      h: "How I use your information",
      list: [
        "To respond to your enquiries and provide the services you purchase.",
        "To process payments, issue invoices and handle refunds.",
        "To prevent fraud and keep this website secure.",
        "To meet legal, tax and accounting obligations.",
        "To improve this website and my services.",
      ],
    },
    {
      h: "Payment processing",
      p: [
        `Online payments are handled by ${payment.gateway} (Razorpay Software Private Limited), a PCI-DSS compliant payment gateway. When you pay, you share your payment details directly with Razorpay, and their privacy policy (razorpay.com/privacy) also applies.`,
      ],
    },
    {
      h: "Sharing of information",
      p: ["I do not sell or rent your personal information. I share it only with:"],
      list: [
        `${payment.gateway}, to process your payment.`,
        "Hosting, email and infrastructure providers that help me run this website.",
        "Government or law-enforcement authorities when required by law.",
      ],
    },
    {
      h: "Cookies",
      p: [
        "This website uses only essential cookies or local storage needed for it to work. The Razorpay checkout may set its own cookies for security and fraud prevention.",
      ],
    },
    {
      h: "Data retention",
      p: [
        "Transaction and invoice records are kept for as long as Indian tax and accounting laws require. Enquiry and project data is kept only while needed for the project or for a reasonable period afterwards, then deleted.",
      ],
    },
    {
      h: "Security",
      p: [
        "This website is served over HTTPS and access to your data is restricted. No method of transmission or storage is 100% secure, but I take reasonable steps to protect your information.",
      ],
    },
    {
      h: "Your rights",
      p: [
        "Under applicable Indian law, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, you may ask to access, correct or delete your personal data, or withdraw consent for its use. Email me and I will respond within a reasonable time.",
      ],
    },
    {
      h: "Children",
      p: ["My services are not directed at anyone under 18 and I do not knowingly collect their data."],
    },
    {
      h: "Third-party links",
      p: ["This website links to client projects, GitHub and LinkedIn. I am not responsible for the privacy practices of those sites."],
    },
    {
      h: "Changes to this policy",
      p: ["I may update this policy from time to time. The “last updated” date above shows the latest version."],
    },
    {
      h: "Contact & grievances",
      p: [`For any privacy question or grievance, contact ${business.name}: ${contact}.`],
    },
  ],
};

export const terms = {
  route: "/terms-and-conditions",
  title: "Terms & Conditions",
  intro: `These Terms govern your use of this website and any services you buy from ${business.name} (“I”, “me”). By paying for a service or using this website you agree to these Terms.`,
  sections: [
    {
      h: "Services",
      p: [
        "I provide web design and development services, including websites, e-commerce stores, web applications, payment-gateway integration and maintenance. The exact scope, features and timeline are agreed with you in writing (email or chat) before work begins.",
      ],
    },
    {
      h: "Pricing and taxes",
      p: [
        "Prices shown on this website are starting prices in Indian Rupees (INR). The final price depends on the agreed scope. Taxes such as GST are extra, where applicable.",
      ],
    },
    {
      h: "Payments",
      list: [
        `Payments are made online through ${payment.gateway} using UPI, cards, netbanking or wallets.`,
        "Large projects are billed in milestones. A booking advance (shown on each service) is payable before work starts, and the balance as agreed.",
        "Work begins after the advance payment is received and the scope is confirmed.",
        "Payment gateway or bank charges, if any, are borne by the payer.",
      ],
    },
    {
      h: "Client responsibilities",
      p: [
        "You agree to provide content, branding, access and feedback on time. Delays on your side can move the delivery date. You confirm that the content you supply does not infringe anyone's rights.",
      ],
    },
    {
      h: "Revisions and changes",
      p: [
        "Each package includes a reasonable number of revisions within the agreed scope. Work outside that scope is treated as a change request and quoted separately.",
      ],
    },
    {
      h: "Third-party costs",
      p: [
        "Domain names, hosting, paid plugins or APIs, SMS/email services and payment-gateway fees are not included in my price unless stated, and are paid directly to those providers.",
      ],
    },
    {
      h: "Intellectual property",
      p: [
        "On full payment, you own the custom code and design I create specifically for your project. Open-source libraries and third-party tools remain under their own licences. Unless you ask for confidentiality in writing, I may show the finished work in my portfolio.",
      ],
    },
    {
      h: "Confidentiality",
      p: ["I keep your non-public business information and project data confidential and use it only to deliver your project."],
    },
    {
      h: "Warranty and liability",
      p: [
        "I build with care and test my work, but I do not guarantee that a website will be uninterrupted or error-free, or promise specific business results such as sales or rankings. To the extent allowed by law, my total liability for any claim is limited to the amount you paid me for the service in question.",
      ],
    },
    {
      h: "Cancellation and refunds",
      p: ["Cancellations and refunds are covered in the Cancellation & Refund Policy, which forms part of these Terms."],
    },
    {
      h: "Termination",
      p: [
        "Either of us may end a project with written notice. You will pay for work completed up to that point, and I will hand over completed work once those dues are cleared.",
      ],
    },
    {
      h: "Governing law",
      p: ["These Terms are governed by the laws of India. Courts in Delhi have exclusive jurisdiction over any dispute."],
    },
    {
      h: "Changes and contact",
      p: [`I may update these Terms from time to time. Questions? Contact ${contact}.`],
    },
  ],
};

export const refund = {
  route: "/refund-policy",
  title: "Cancellation & Refund Policy",
  intro:
    "I want you to feel safe paying online. This policy explains when you can cancel a service and get your money back.",
  sections: [
    {
      h: "Cancelling a service",
      p: ["You can cancel any service by emailing me. The refund you receive depends on how much work has been done at that point."],
    },
    {
      h: "When you are eligible for a refund",
      list: [
        `Full refund if you cancel within ${payment.refundWindowHours} hours of payment and work has not started (no design, development or consultation work done).`,
        "Partial refund if you cancel after work has started: you pay for the work completed so far, and I refund the unused part of your advance or milestone payment.",
        "Full refund if I am unable to deliver the service I agreed to provide.",
        "Monthly maintenance can be cancelled any time before the next billing cycle; the current month is not refunded.",
      ],
    },
    {
      h: "When a refund is not available",
      list: [
        "Completed and delivered milestones.",
        "Work already handed over and accepted.",
        "Domain, hosting, licences or other third-party purchases made on your behalf.",
        "Cancellation because of a change of mind after the project has been substantially completed.",
      ],
    },
    {
      h: "Failed or duplicate payments",
      p: [
        `If money is debited but the payment fails, or you are charged twice, the amount is automatically reversed by ${payment.gateway} or your bank, usually within ${payment.refundProcessing}. If it is not, email me the payment ID and I will help you trace it.`,
      ],
    },
    {
      h: "Refund timeline",
      p: [
        `Approved refunds are issued to the original payment method within ${payment.refundProcessing} of approval. Your bank or card issuer may take a few extra days to show the credit.`,
      ],
    },
    {
      h: "How to request a refund",
      p: [
        `Email ${profile.email} (or call ${profile.phone}) with your name, the email used for payment, the payment ID and the reason for cancellation. I reply to refund requests ${business.responseTime}.`,
      ],
    },
    {
      h: "Cancellation by me",
      p: [
        "If I have to cancel a project for any reason, I will refund any payment for work I have not delivered.",
      ],
    },
  ],
};

export const shipping = {
  route: "/shipping-policy",
  title: "Shipping & Delivery Policy",
  intro:
    "I provide digital services only. No physical goods are sold or shipped, so there are no shipping charges and no courier delays.",
  sections: [
    {
      h: "How work is delivered",
      list: [
        "Progress is shared through staging links, screen recordings or demo calls.",
        "Final delivery is made by deploying the project to your hosting or domain, or by handing over the source code (for example via a Git repository).",
        "Login details, documentation and handover notes are sent to the email address you used at payment.",
      ],
    },
    {
      h: "Estimated delivery times",
      p: ["Timelines start once the advance payment is received and the scope and content are confirmed:"],
      list: services.map((s) => `${s.title} — ${s.delivery} (from ${formatINR(s.price)}${s.unit === "per month" ? "/month" : ""})`),
    },
    {
      h: "Delays",
      p: [
        "Delays can happen when content, feedback or access is late, or when the scope changes. I will tell you early if a deadline is at risk.",
      ],
    },
    {
      h: "Delivery confirmation",
      p: [
        "A project is considered delivered when the final version is live or handed over to you. Please report any issue within the support period agreed for your package.",
      ],
    },
    {
      h: "Availability",
      p: [
        `I work with clients across India and abroad. Payments are accepted in ${payment.currency} through ${payment.gateway}.`,
      ],
    },
    {
      h: "Questions",
      p: [`Contact ${contact}.`],
    },
  ],
};
