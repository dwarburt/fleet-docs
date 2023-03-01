"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2651],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),u=a(6550),o=a(1980),i=a(7392),c=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[s,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,i]=m({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=o??d;return h({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,r]),tabValues:r}}var b=a(2389);const g="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==u&&(d(t),o(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},s,{className:(0,r.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return l.createElement(w,(0,n.Z)({key:String(t)},e))}},6828:(e,t,a)=>{a.d(t,{d:()=>n});const n={"v0.5":{fleet:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-0.5.2.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-agent-0.5.2.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.5.2/fleet-crd-0.5.2.tgz"},next:{fleet:"https://github.com/rancher/fleet/releases/download/v0.6.0-rc.4/fleet-0.6.0-rc.4.tgz",fleetAgent:"https://github.com/rancher/fleet/releases/download/v0.6.0-rc.4/fleet-agent-0.6.0-rc.4.tgz",fleetCRD:"https://github.com/rancher/fleet/releases/download/v0.6.0-rc.4/fleet-crd-0.6.0-rc.4.tgz",kubernetes:"1.20.5"}}},2257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=a(7462),l=(a(7294),a(3905)),r=a(6828),s=a(814),u=a(4866),o=a(5162);const i={},c="Quick Start",d={unversionedId:"quickstart",id:"quickstart",title:"Quick Start",description:"Who needs documentation, lets just run this thing!",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/quickstart.md",tags:[],version:"current",lastUpdatedAt:1677682772,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/"},next:{title:"Creating a Deployment",permalink:"/tut-deployment"}},p={},h=[{value:"Install",id:"install",level:2},{value:"Add a Git Repo to Watch",id:"add-a-git-repo-to-watch",level:2},{value:"Get Status",id:"get-status",level:2}],m={toc:h};function f(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quick-start"},"Quick Start"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1313).Z,width:"520",height:"279"})),(0,l.kt)("p",null,"Who needs documentation, lets just run this thing!"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Get helm if you don't have it.  Helm 3 is just a CLI and won't do bad insecure\nthings to your cluster."),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",label:"Linux/Mac",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"brew install helm")),(0,l.kt)(o.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"choco install kubernetes-helm"))),(0,l.kt)("p",null,"Install the Fleet Helm charts (there's two because we separate out CRDs for ultimate flexibility.)"),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"helm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet-crd"," ",r.d.next.fleetCRD,"\nhelm -n cattle-fleet-system install --create-namespace --wait \\\n    fleet"," ",r.d.next.fleet),(0,l.kt)("h2",{id:"add-a-git-repo-to-watch"},"Add a Git Repo to Watch"),(0,l.kt)("p",null,"Change ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.repo")," to your git repo of choice.  Kubernetes manifest files that should\nbe deployed should be in ",(0,l.kt)("inlineCode",{parentName:"p"},"/manifests")," in your repo."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cat > example.yaml << "EOF"\napiVersion: fleet.cattle.io/v1alpha1\nkind: GitRepo\nmetadata:\n  name: sample\n  # This namespace is special and auto-wired to deploy to the local cluster\n  namespace: fleet-local\nspec:\n  # Everything from this repo will be ran in this cluster. You trust me right?\n  repo: "https://github.com/rancher/fleet-examples"\n  paths:\n  - simple\nEOF\n\nkubectl apply -f example.yaml\n')),(0,l.kt)("h2",{id:"get-status"},"Get Status"),(0,l.kt)("p",null,"Get status of what fleet is doing"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n fleet-local get fleet\n")),(0,l.kt)("p",null,"You should see something like this get created in your cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get deploy frontend\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nfrontend   3/3     3            3           116m\n")),(0,l.kt)("p",null,"Enjoy and read the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.github.io/fleet"},"docs"),"."))}f.isMDXComponent=!0},1313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/single-cluster-72ee1a61547953f123dd741c02cd2017.png"}}]);