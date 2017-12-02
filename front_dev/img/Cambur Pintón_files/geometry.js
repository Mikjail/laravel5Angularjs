google.maps.__gjsload__('geometry', function(_){var hx=function(a,b){return Math.abs(_.Cb(b-a,-180,180))},ix=function(a,b,c,d,e){if(!d){c=hx(a.lng(),c)/hx(a.lng(),b.lng());if(!e)return e=Math.sin(_.vb(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.vb(b.lat())),_.wb(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.z(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.vb(a.lat());a=_.vb(a.lng());d=_.vb(b.lat());b=_.vb(b.lng());c=_.vb(c);return _.Cb(_.wb(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},jx=_.k(),kx={containsLocation:function(a,b){var c=_.Cb(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map");f=!d&&f?f.getProjection():null;for(var g=!1,h=0,l=e.getLength();h<l;++h)for(var n=e.getAt(h),q=0,r=n.getLength();q<r;++q){var u=n.getAt(q),B=n.getAt((q+1)%r),w=_.Cb(u.lng(),-180,180),C=_.Cb(B.lng(),-180,180),A=Math.max(w,C);w=Math.min(w,C);(180<A-w?c>=A||c<w:
c<A&&c>=w)&&ix(u,B,c,d,f)<a.lat()&&(g=!g)}return g||kx.isLocationOnEdge(a,b)},isLocationOnEdge:function(a,b,c){c=c||1E-9;var d=_.Cb(a.lng(),-180,180),e=b instanceof _.Eg,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,l=g.getLength();h<l;++h)for(var n=g.getAt(h),q=n.getLength(),r=e?q:q-1,u=0;u<r;++u){var B=n.getAt(u),w=n.getAt((u+1)%q),C=_.Cb(B.lng(),-180,180),A=_.Cb(w.lng(),-180,180),E=Math.max(C,A),I=Math.min(C,A);if(C=1E-9>=Math.abs(_.Cb(C-A,-180,
180))&&(Math.abs(_.Cb(C-d,-180,180))<=c||Math.abs(_.Cb(A-d,-180,180))<=c)){C=a.lat();A=Math.min(B.lat(),w.lat())-c;var H=Math.max(B.lat(),w.lat())+c;C=C>=A&&C<=H}if(C)return!0;if(180<E-I?d+c>=E||d-c<=I:d+c>=I&&d-c<=E)if(B=ix(B,w,d,f,b),Math.abs(B-a.lat())<c)return!0}return!1}};var lx={computeHeading:function(a,b){var c=_.pc(a),d=_.qc(a);a=_.pc(b);b=_.qc(b)-d;return _.Cb(_.wb(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)},computeOffset:function(a,b,c,d){b/=d||6378137;c=_.vb(c);var e=_.pc(a);a=_.qc(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e);e=Math.cos(e);var g=d*f+b*e*Math.cos(c);return new _.F(_.wb(Math.asin(g)),_.wb(a+Math.atan2(b*e*Math.sin(c),d-f*g)))},computeOffsetOrigin:function(a,b,c,d){c=_.vb(c);b/=
d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.pc(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f);g/=d*d+e*e;var h=(c-e*g)/d;g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.qc(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.F(_.wb(g),_.wb(a))},interpolate:function(a,b,c){var d=_.pc(a),e=_.qc(a),f=_.pc(b),g=_.qc(b),h=Math.cos(d),
l=Math.cos(f);b=lx.bf(a,b);var n=Math.sin(b);if(1E-6>n)return new _.F(a.lat(),a.lng());a=Math.sin((1-c)*b)/n;c=Math.sin(c*b)/n;b=a*h*Math.cos(e)+c*l*Math.cos(g);e=a*h*Math.sin(e)+c*l*Math.sin(g);return new _.F(_.wb(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.wb(Math.atan2(e,b)))},bf:function(a,b){var c=_.pc(a);a=_.qc(a);var d=_.pc(b);b=_.qc(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))},computeDistanceBetween:function(a,
b,c){c=c||6378137;return lx.bf(a,b)*c},computeLength:function(a,b){b=b||6378137;var c=0;a instanceof _.Zc&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=lx.computeDistanceBetween(a[d],a[d+1],b);return c},computeArea:function(a,b){return Math.abs(lx.computeSignedArea(a,b))},computeSignedArea:function(a,b){b=b||6378137;a instanceof _.Zc&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=lx.el(c,a[e],a[e+1]);return d*b*b},el:function(a,b,c){return lx.fl(a,b,c)*lx.im(a,b,c)},fl:function(a,
b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=lx.bf(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))},im:function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.pc(d);d=_.qc(d);var f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?
1:-1}};var mx={decodePath:function(a){for(var b=_.xb(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,l=0;do{var n=a.charCodeAt(d++)-63-1;h+=n<<l;l+=5}while(31<=n);e+=h&1?~(h>>1):h>>1;h=1;l=0;do n=a.charCodeAt(d++)-63-1,h+=n<<l,l+=5;while(31<=n);f+=h&1?~(h>>1):h>>1;c[g]=new _.F(1E-5*e,1E-5*f,!0)}c.length=g;return c},encodePath:function(a){a instanceof _.Zc&&(a=a.getArray());return mx.Cn(a,function(a){return[Math.round(1E5*a.lat()),Math.round(1E5*a.lng())]})},Cn:function(a,b){for(var c=
[],d=[0,0],e,f=0,g=_.xb(a);f<g;++f)e=b?b(a[f]):a[f],mx.gi(e[0]-d[0],c),mx.gi(e[1]-d[1],c),d=e;return c.join("")},gi:function(a,b){return mx.Dn(0>a?~(a<<1):a<<1,b)},Dn:function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63));return b}};_.jb.google.maps.geometry={encoding:mx,spherical:lx,poly:kx};_.m=jx.prototype;_.m.decodePath=mx.decodePath;_.m.encodePath=mx.encodePath;_.m.computeDistanceBetween=lx.computeDistanceBetween;_.m.interpolate=lx.interpolate;_.m.computeHeading=lx.computeHeading;_.m.computeOffset=lx.computeOffset;_.m.computeOffsetOrigin=lx.computeOffsetOrigin;_.be("geometry",new jx);});
