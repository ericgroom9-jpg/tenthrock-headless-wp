module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},24306,e=>{"use strict";var t=e.i(47909),r=e.i(74017),n=e.i(96250),a=e.i(59756),o=e.i(61916),i=e.i(14444),s=e.i(37092),l=e.i(69741),d=e.i(16795),u=e.i(70996),p=e.i(95169),c=e.i(47587),m=e.i(66012),f=e.i(70101),h=e.i(26937),g=e.i(10372),x=e.i(93695);e.i(52474);var y=e.i(220),R=e.i(89171);e.i(33252);var v=e.i(65704),F=e.i(75602);let b=F.gql`
  fragment GfFormFields on GfForm {
    databaseId
    title
    description
    cssClass
    labelPlacement
    descriptionPlacement
    submitButton {
      text
      type
    }
    confirmations {
      id
      isDefault
      message
      type
      url
    }
    pagination {
      type
      pageNames
      progressbarCompletionText
    }
    formFields(first: 500) {
      nodes {
        id
        databaseId
        type
        layoutGridColumnSpan
        layoutSpacerGridColumnSpan
        pageNumber
        visibility
        displayOnly
        inputType
        ... on GfFieldWithLabelSetting {
          label
        }
        ... on GfFieldWithDescriptionSetting {
          description
        }
        ... on GfFieldWithPlaceholderSetting {
          placeholder
        }
        ... on GfFieldWithDefaultValueSetting {
          defaultValue
        }
        ... on GfFieldWithCssClassSetting {
          cssClass
        }
        ... on GfFieldWithMaxLengthSetting {
          maxLength
        }
        ... on GfFieldWithRulesSetting {
          isRequired
        }
        ... on GfFieldWithChoicesSetting {
          choices {
            text
            value
          }
        }
        ... on GfFieldWithConditionalLogicSetting {
          conditionalLogic {
            actionType
            logicType
            rules {
              fieldId
              operator
              value
            }
          }
        }
        ... on TextField {
          inputType
        }
        ... on TextAreaField {
          inputType
        }
        ... on EmailField {
          hasEmailConfirmation
        }
        ... on NumberField {
          rangeMin
          rangeMax
        }
        ... on PhoneField {
          phoneFormat
        }
        ... on SelectField {
          defaultValue
        }
        ... on RadioField {
          hasOtherChoice
        }
        ... on CheckboxField {
          hasSelectAll
        }
        ... on DateField {
          dateFormat
          dateType
          calendarIconType
        }
        ... on TimeField {
          timeFormat
          inputs {
            id
            label
            placeholder
          }
        }
        ... on FileUploadField {
          allowedExtensions
          maxFileSize
          maxFiles
        }
        ... on NameField {
          inputs {
            id
            label
            name
            placeholder
            isHidden
          }
        }
        ... on AddressField {
          inputs {
            id
            label
            name
            placeholder
            isHidden
          }
        }
        ... on HtmlField {
          content
        }
        ... on SectionField {
          label
          description
        }
      }
    }
  }
`,E=F.gql`
  ${b}
  query GetGfForm($formId: ID!, $idType: FormIdTypeEnum = DATABASE_ID) {
    gfForm(id: $formId, idType: $idType) {
      ...GfFormFields
    }
  }
`,A=F.gql`
  mutation SubmitGfForm($formId: ID!, $fieldValues: [FormFieldValuesInput]!, $saveAsDraft: Boolean) {
    submitGfForm(
      input: {
        id: $formId
        fieldValues: $fieldValues
        saveAsDraft: $saveAsDraft
      }
    ) {
      confirmation {
        message
        type
        url
      }
      errors {
        id
        message
      }
      entry {
        id
        ... on GfSubmittedEntry {
          databaseId
          dateCreated
        }
      }
    }
  }
`;F.gql`
  query CheckGfSchema {
    __schema {
      types {
        name
      }
    }
  }
`;let T=new Map;function S(){let e=process.env.WP_API_URL;if(!e)throw Error("WP_API_URL environment variable is not set");let t={"Content-Type":"application/json"};if(process.env.WP_AUTH_USER&&process.env.WP_AUTH_PASSWORD){let e=Buffer.from(`${process.env.WP_AUTH_USER}:${process.env.WP_AUTH_PASSWORD}`).toString("base64");t.Authorization=`Basic ${e}`}return new v.GraphQLClient(e,{headers:t})}async function w(e){let{searchParams:t}=new URL(e.url),r=t.get("formId");if(!r)return R.NextResponse.json({error:"formId is required"},{status:400});try{let e=S(),t=await e.request(E,{formId:r,idType:"DATABASE_ID"});if(!t.gfForm)return R.NextResponse.json({error:"Form not found"},{status:404});return R.NextResponse.json({form:t.gfForm})}catch(e){return console.error("Error fetching Gravity Form:",e),R.NextResponse.json({error:"Failed to fetch form"},{status:500})}}async function C(e){var t;let r,n,a;if(t=(r=e.headers.get("x-forwarded-for"))?r.split(",")[0].trim():e.headers.get("x-real-ip")||"unknown",n=Date.now(),(a=T.get(t))&&!(n>a.resetTime)?a.count>=10||(a.count++,!1):(T.set(t,{count:1,resetTime:n+6e4}),!1))return R.NextResponse.json({error:"Too many submissions. Please try again later."},{status:429});try{let{formId:t,fieldValues:r,gf_hp:n}=await e.json();if(n)return R.NextResponse.json({confirmation:{message:"Thank you for your submission.",type:"MESSAGE"},entry:null,errors:null});if(!t||!Array.isArray(r))return R.NextResponse.json({error:"formId and fieldValues are required"},{status:400});let a=S(),{submitGfForm:o}=await a.request(A,{formId:String(t),fieldValues:r,saveAsDraft:!1});if(o.errors&&o.errors.length>0)return R.NextResponse.json({errors:o.errors,confirmation:null,entry:null},{status:400});return R.NextResponse.json({confirmation:o.confirmation,entry:o.entry,errors:null})}catch(t){console.error("Error submitting Gravity Form:",t);let e="Failed to submit form";return t&&"object"==typeof t&&"response"in t&&t.response?.errors?.length&&(e=t.response.errors.map(e=>e.message).join(", ")),R.NextResponse.json({error:e},{status:500})}}e.s(["GET",()=>w,"POST",()=>C],75962);var P=e.i(75962);let N=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/forms/submit/route",pathname:"/api/forms/submit",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/forms/submit/route.ts",nextConfigOutput:"",userland:P}),{workAsyncStorage:I,workUnitAsyncStorage:_,serverHooks:j}=N;function q(){return(0,n.patchFetch)({workAsyncStorage:I,workUnitAsyncStorage:_})}async function D(e,t,n){N.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/api/forms/submit/route";R=R.replace(/\/index$/,"")||"/";let v=await N.prepare(e,t,{srcPage:R,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:F,params:b,nextConfig:E,parsedUrl:A,isDraftMode:T,prerenderManifest:S,routerServerContext:w,isOnDemandRevalidate:C,revalidateOnlyGenerated:P,resolvedPathname:I,clientReferenceManifest:_,serverActionsManifest:j}=v,q=(0,l.normalizeAppPath)(R),D=!!(S.dynamicRoutes[q]||S.routes[I]),G=async()=>((null==w?void 0:w.render404)?await w.render404(e,t,A,!1):t.end("This page could not be found"),null);if(D&&!T){let e=!!S.routes[I],t=S.dynamicRoutes[q];if(t&&!1===t.fallback&&!e){if(E.experimental.adapterPath)return await G();throw new x.NoFallbackError}}let O=null;!D||N.isDev||T||(O="/index"===(O=I)?"/":O);let U=!0===N.isDev||!D,k=D&&!U;j&&_&&(0,i.setReferenceManifestsSingleton)({page:R,clientReferenceManifest:_,serverActionsManifest:j,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:j})});let H=e.method||"GET",$=(0,o.getTracer)(),M=$.getActiveScopeSpan(),W={params:b,prerenderManifest:S,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:U,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:E.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n)=>N.onRequestError(e,t,n,w)},sharedContext:{buildId:F}},L=new d.NodeNextRequest(e),B=new d.NodeNextResponse(t),V=u.NextRequestAdapter.fromNodeNextRequest(L,(0,u.signalFromNodeResponse)(t));try{let i=async e=>N.handle(V,W).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=$.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${H} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${H} ${R}`)}),s=!!(0,a.getRequestMeta)(e,"minimalMode"),l=async a=>{var o,l;let d=async({previousCacheEntry:r})=>{try{if(!s&&C&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let o=await i(a);e.fetchMetrics=W.renderOpts.fetchMetrics;let l=W.renderOpts.pendingWaitUntil;l&&n.waitUntil&&(n.waitUntil(l),l=void 0);let d=W.renderOpts.collectedTags;if(!D)return await (0,m.sendResponse)(L,B,o,W.renderOpts.pendingWaitUntil),null;{let e=await o.blob(),t=(0,f.toNodeOutgoingHttpHeaders)(o.headers);d&&(t[g.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,n=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:W.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await N.onRequestError(e,t,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:k,isOnDemandRevalidate:C})},w),t}},u=await N.handleResponse({req:e,nextConfig:E,cacheKey:O,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:C,revalidateOnlyGenerated:P,responseGenerator:d,waitUntil:n.waitUntil,isMinimalMode:s});if(!D)return null;if((null==u||null==(o=u.value)?void 0:o.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(l=u.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||t.setHeader("x-nextjs-cache",C?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),T&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,f.fromNodeOutgoingHttpHeaders)(u.value.headers);return s&&D||p.delete(g.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,h.getCacheControlHeader)(u.cacheControl)),await (0,m.sendResponse)(L,B,new Response(u.value.body,{headers:p,status:u.value.status||200})),null};M?await l(M):await $.withPropagatedContext(e.headers,()=>$.trace(p.BaseServerSpan.handleRequest,{spanName:`${H} ${R}`,kind:o.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},l))}catch(t){if(t instanceof x.NoFallbackError||await N.onRequestError(e,t,{routerKind:"App Router",routePath:q,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:k,isOnDemandRevalidate:C})}),D)throw t;return await (0,m.sendResponse)(L,B,new Response(null,{status:500})),null}}e.s(["handler",()=>D,"patchFetch",()=>q,"routeModule",()=>N,"serverHooks",()=>j,"workAsyncStorage",()=>I,"workUnitAsyncStorage",()=>_],24306)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5b17c03._.js.map