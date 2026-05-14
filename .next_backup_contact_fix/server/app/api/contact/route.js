"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5315:e=>{e.exports=require("path")},6727:(e,t,a)=>{a.r(t),a.d(t,{originalPathname:()=>P,patchFetch:()=>q,requestAsyncStorage:()=>j,routeModule:()=>S,serverHooks:()=>T,staticGenerationAsyncStorage:()=>A});var i={};a.r(i),a.d(i,{POST:()=>k,dynamic:()=>b,runtime:()=>y});var r=a(3278),o=a(5002),n=a(4877);let s=require("fs");var l=a(5315),d=a.n(l),c=a(1309);let u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function p(e){return"string"==typeof e?e.trim():""}var m=a(2466);function h(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function g({preheader:e,eyebrow:t,heading:a,intro:i,supporting:r,inquiry:o,closing:n}){var s;let l=[{label:"Name",value:o.name},{label:"Email",value:o.email},{label:"Company",value:o.company},{label:"Service",value:o.service},{label:"Budget",value:o.budget},{label:"Submitted",value:(s=o.submittedAt,new Intl.DateTimeFormat("en-IN",{dateStyle:"medium",timeStyle:"short"}).format(new Date(s)))},{label:"Lead ID",value:o.id}],d=h(o.message),c=l.map(e=>`
        <tr>
          <td style="padding: 0 0 8px; color: #a1a1aa; font-size: 13px; font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;">
            ${h(e.label)}
          </td>
          <td style="padding: 0 0 8px; color: #ffffff; font-size: 14px; text-align: right;">
            ${h(e.value)}
          </td>
        </tr>
      `).join(""),u=l.map(e=>`${e.label}: ${e.value}`).join("\n");return{html:`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${h(a)}</title>
      </head>
      <body style="margin: 0; background: #070707; color: #ffffff; font-family: 'Space Grotesk', Arial, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
          ${h(e)}
        </div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #070707; padding: 28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; border: 1px solid rgba(255,255,255,.1); border-radius: 28px; overflow: hidden; background: linear-gradient(180deg, rgba(123,94,167,.14), rgba(8,8,8,.96) 34%);">
                <tr>
                  <td style="padding: 32px 32px 20px;">
                    <div style="display: inline-block; padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.05); color: #d9d4ff; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;">
                      ${h(t)}
                    </div>
                    <h1 style="margin: 18px 0 14px; font-size: 38px; line-height: 1.05; letter-spacing: -0.04em; font-weight: 700;">
                      ${h(a)}
                    </h1>
                    <p style="margin: 0; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.75;">
                      ${h(i)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-radius: 24px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04);">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 18px; color: #ffffff; font-size: 18px; font-weight: 600;">
                            Project structure
                          </p>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            ${c}
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-radius: 24px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.03);">
                      <tr>
                        <td style="padding: 24px;">
                          <p style="margin: 0 0 10px; color: #ffffff; font-size: 18px; font-weight: 600;">
                            Project notes
                          </p>
                          <p style="margin: 0; color: rgba(255,255,255,.74); font-size: 15px; line-height: 1.8; white-space: pre-wrap;">
                            ${d}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 32px 14px;">
                    <div style="border-radius: 24px; border: 1px solid rgba(255,255,255,.08); background: rgba(255,255,255,.025); padding: 20px 24px;">
                      <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: 600;">
                        What happens next
                      </p>
                      <p style="margin: 0; color: rgba(255,255,255,.68); font-size: 15px; line-height: 1.75;">
                        ${h(r)}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 32px 32px;">
                    <p style="margin: 0; color: rgba(255,255,255,.78); font-size: 15px; line-height: 1.75;">
                      ${h(n)}
                    </p>
                    <p style="margin: 18px 0 0; color: rgba(255,255,255,.42); font-size: 13px; line-height: 1.6;">
                      ${h(m.S9.name)}<br />
                      ${h(m.S9.email)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,text:[a,"",i,"","Project structure",u,"","Project notes",o.message,"","What happens next",r,"",n,"",`${m.S9.name} | ${m.S9.email}`].join("\n")}}async function f({to:e,subject:t,html:a,text:i,replyTo:r}){let o=process.env.RESEND_API_KEY,n=process.env.RESEND_FROM_EMAIL||`${m.S9.name} <contact@tesserastudio.in>`;if(!o)throw Error("RESEND_API_KEY is missing.");let s=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json","User-Agent":"tessera-studio-contact/1.0",Accept:"application/json"},body:JSON.stringify({from:n,to:Array.isArray(e)?e:[e],subject:t,html:a,text:i,replyTo:r})});if(!s.ok){let e=await s.text();throw Error(`Resend email failed (${s.status}): ${e}`)}return s.json()}let y="nodejs",b="force-dynamic";async function v(e){if("true"!==process.env.PERSIST_LEADS_LOCALLY)return;let t=d().join(process.cwd(),"data"),a=d().join(t,"leads.json");await s.promises.mkdir(t,{recursive:!0});let i=[];try{let e=await s.promises.readFile(a,"utf8");i=JSON.parse(e)}catch(e){if("ENOENT"!==e.code)throw e}i.unshift(e),await s.promises.writeFile(a,`${JSON.stringify(i,null,2)}
`,"utf8")}async function w(e){let t=process.env.CONTACT_WEBHOOK_URL;if(!t)return;let a=await fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)});if(!a.ok)throw Error(`Webhook failed with status ${a.status}`)}async function x(e){let t=process.env.ADMIN_NOTIFICATION_EMAIL||"contact@tesserastudio.in",a=g({preheader:`New inquiry from ${e.name} at ${e.company}.`,eyebrow:"New project inquiry",heading:`${e.name} just submitted a project brief`,intro:"A new contact form submission has landed from the website. Here is the project structure and the exact brief the customer shared.",supporting:"Reply directly to this email to continue the conversation with the customer, or move the brief into your internal project workflow.",inquiry:e,closing:"This message was generated automatically by the Tessera Studio website."}),i=g({preheader:"We received your Tessera Studio project inquiry.",eyebrow:"Project inquiry received",heading:"Your project brief landed with Tessera",intro:"Thanks for reaching out. We received your inquiry and kept a clean copy of the details you submitted so we can review the project properly.",supporting:"We will review your brief and get back to you with the next step, typically within one business day. If anything changes, just reply to this email.",inquiry:e,closing:"We are looking forward to learning more about what you want to build."});await Promise.all([f({to:t,subject:`New project inquiry: ${e.company} - ${e.service}`,html:a.html,text:a.text,replyTo:e.email}),f({to:e.email,subject:"We received your project inquiry | Tessera Studio",html:i.html,text:i.text,replyTo:t})])}async function k(e){let t=function(e){if(!e||"object"!=typeof e)return{ok:!1,error:"Invalid request body.",fields:{form:"Please submit the form again."}};let t={name:p(e.name),email:p(e.email).toLowerCase(),company:p(e.company),service:p(e.service)||"General growth project",budget:p(e.budget)||"Not specified",message:p(e.message)},a={};return(t.name.length<2&&(a.name="Please add your name."),u.test(t.email)||(a.email="Please use a valid email address."),t.company.length<2&&(a.company="Please add your company or brand name."),t.message.length<10&&(a.message="Tell us a little more about the project."),Object.keys(a).length>0)?{ok:!1,error:"Please fix the highlighted fields.",fields:a}:{ok:!0,data:t}}(await e.json().catch(()=>null));if(!t.ok)return c.NextResponse.json({ok:!1,error:t.error,fields:t.fields},{status:400});let a={...t.data,id:crypto.randomUUID(),submittedAt:new Date().toISOString(),source:"website"};try{await v(a)}catch(e){return console.error("Contact submission failed",e),c.NextResponse.json({ok:!1,error:"We could not save the inquiry right now. Please email contact@tesserastudio.in."},{status:500})}let i=!0;try{await w(a)}catch(e){console.error("Contact webhook failed",e)}try{await x(a)}catch(e){i=!1,console.error("Contact email delivery failed",e)}return c.NextResponse.json({ok:!0,message:i?"Thanks. Your project brief landed with Tessera and a confirmation email is on its way.":"Thanks. Your project brief landed with Tessera. We saved your details, but the confirmation email could not be sent right now.",leadId:a.id,confirmationQueued:i})}let S=new r.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"C:\\Users\\USER\\Desktop\\TESSERA\\CodeFinal\\app\\api\\contact\\route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:j,staticGenerationAsyncStorage:A,serverHooks:T}=S,P="/api/contact/route";function q(){return(0,n.patchFetch)({serverHooks:T,staticGenerationAsyncStorage:A})}},2466:(e,t,a)=>{a.d(t,{FV:()=>i,KT:()=>o,Q7:()=>s,Rn:()=>l,S9:()=>r,jI:()=>d,sy:()=>n});let i=[{label:"Services",href:"/#services"},{label:"Portfolio",href:"/#portfolio"},{label:"Process",href:"/#process"},{label:"Contact",href:"/#contact"}],r={name:"Tessera Studio",email:"contact@tesserastudio.in",phone:"+91 98765 43210",location:"Serving brands worldwide",calendarUrl:"mailto:contact@tesserastudio.in?subject=Book%20a%20Discovery%20Call"},o=[{label:"Instagram",href:"https://instagram.com/tesserastudio"},{label:"LinkedIn",href:"https://linkedin.com/company/tesserastudio"},{label:"Twitter/X",href:"https://x.com/tesserastudio"}],n=[{label:"Privacy Policy",href:"/privacy"},{label:"Terms",href:"/terms"}],s=["Real Estate","F&B","SaaS","E-commerce","Healthcare","Education","Hospitality","Creators"],l=[{slug:"urban-nest-realty",title:"Real Estate Co. Website",category:"Web Design",metric:"+62% qualified inquiries",visual:"architecture",client:"Urban Nest Realty",summary:"A premium property showcase and inquiry funnel designed to make a growing brokerage feel more established and convert higher-intent buyers.",overview:"Urban Nest needed a site that matched the trust level of its inventory. We redesigned the positioning, built a cleaner property discovery experience and tightened the inquiry flow for higher-quality lead capture.",services:["Positioning","UX design","Web development","Lead optimization"],timeline:"3 weeks",stats:[{label:"Qualified inquiries",value:"+62%"},{label:"Average session time",value:"+41%"},{label:"Launch timeline",value:"21 days"}],challenge:"The previous site looked generic, buried property highlights and forced serious buyers through a clumsy contact process.",solution:"We introduced editorial property layouts, clearer agent trust cues, faster browsing and a tighter CTA rhythm across listing and landing pages.",outcome:"The business launched with a sharper premium feel and a noticeably better lead mix, with more complete briefs and fewer low-intent inquiries."},{slug:"bloom-table-campaign",title:"Cafe Marketing Campaign",category:"Digital Marketing",metric:"3.8x campaign ROAS",visual:"campaign",client:"Bloom Table Cafe",summary:"A campaign system for a neighborhood cafe that needed stronger weekday traffic and more repeat customer momentum.",overview:"Bloom Table had solid footfall but weak campaign structure. We built a creative system, localized ad messaging and a tighter offer ladder for repeat visits.",services:["Campaign strategy","Creative direction","Paid social","Offer funnel"],timeline:"4 weeks",stats:[{label:"Campaign ROAS",value:"3.8x"},{label:"Weekday traffic",value:"+27%"},{label:"Returning customers",value:"+19%"}],challenge:"The cafe had a likeable brand but inconsistent offers, low message-to-offer clarity and ad creative that blended into the feed.",solution:"We restructured the promotions around clear intent buckets, designed punchier creatives and connected campaign timing to in-store behavior.",outcome:"The campaign gave the team a repeatable acquisition system instead of one-off boosts, with healthier weekday demand and better audience retention."},{slug:"orbitstack-launch",title:"Startup Landing Page",category:"Web + Branding",metric:"41% demo conversion lift",visual:"saas",client:"OrbitStack",summary:"A sharper SaaS launch page and brand system for a product that needed stronger message clarity before paid acquisition.",overview:"OrbitStack had a capable product and a fuzzy story. We clarified the value prop, designed a cleaner interface narrative and rebuilt the landing page around demo conversion.",services:["Messaging","Brand system","Landing page design","Front-end build"],timeline:"2.5 weeks",stats:[{label:"Demo conversion lift",value:"+41%"},{label:"Bounce reduction",value:"-23%"},{label:"Paid readiness",value:"Launch-ready"}],challenge:"The product page was feature-heavy, visually flat and asked too much interpretation from a cold visitor.",solution:"We reframed the narrative around outcomes, introduced a more distinct visual system and turned the interface into proof instead of decoration.",outcome:"The team launched with clearer positioning, stronger campaign readiness and materially better conversion from visitor to booked demo."},{slug:"always-on-ai-receptionist",title:"AI Receptionist System",category:"AI Automation",metric:"24/7 lead response",visual:"chat",client:"Northline Clinics",summary:"An AI-first response workflow that qualified inbound leads, answered common questions and handed clean context to the human team.",overview:"Northline was losing time to manual follow-up and missed evening inquiries. We designed an AI receptionist flow that could respond instantly and escalate cleanly.",services:["Conversation design","Automation logic","CRM workflow","Ops handoff"],timeline:"2 weeks",stats:[{label:"Lead response coverage",value:"24/7"},{label:"Manual follow-up load",value:"-58%"},{label:"Qualified handoffs",value:"+34%"}],challenge:"The team was juggling inbound requests across channels, which meant slow response times and incomplete context for follow-up.",solution:"We built an AI triage layer with clear qualification rules, a human escalation path and CRM logging that made each lead easier to act on.",outcome:"The workflow gave the sales and ops team their evenings back while improving response speed and preserving a polished first-touch experience."},{slug:"lattice-brand-system",title:"Brand Identity Project",category:"Branding",metric:"Launch-ready visual system",visual:"identity",client:"Lattice Atelier",summary:"A visual identity system built to make a new premium brand look established from day one across web, social and sales touchpoints.",overview:"Lattice Atelier needed a brand system with enough character to feel memorable but enough discipline to scale across channels without getting noisy.",services:["Identity strategy","Logo system","Typography","Launch toolkit"],timeline:"3 weeks",stats:[{label:"Primary brand assets",value:"28"},{label:"Launch toolkit",value:"Ready in 3 weeks"},{label:"Social system",value:"12 templates"}],challenge:"The brand was entering a crowded space with no visual equity and needed to look credible immediately.",solution:"We built a tile-inspired identity, expressive typography rules and a content-ready asset kit that kept the brand consistent without feeling rigid.",outcome:"The business launched with a cohesive premium presence and a system the internal team could actually use day to day."}];function d(e){return l.find(t=>t.slug===e)}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[379,833],()=>a(6727));module.exports=i})();