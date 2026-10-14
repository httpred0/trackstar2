/* @ds-bundle: {"format":4,"namespace":"TrackStarDesignSystem_75f3a7","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Avatar","sourcePath":"components/avatar/Avatar.jsx"},{"name":"Chyron","sourcePath":"components/chyron/Chyron.jsx"},{"name":"EpisodeCard","sourcePath":"components/episode-card/EpisodeCard.jsx"},{"name":"Checkbox","sourcePath":"components/form/Checkbox.jsx"},{"name":"FieldInfo","sourcePath":"components/form/FieldInfo.jsx"},{"name":"FormField","sourcePath":"components/form/FormField.jsx"},{"name":"ICONS","sourcePath":"components/icon/Icon.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"MenuItem","sourcePath":"components/menu/MenuItem.jsx"},{"name":"Pill","sourcePath":"components/pill/Pill.jsx"},{"name":"ReviewCard","sourcePath":"components/review-card/ReviewCard.jsx"},{"name":"ScoreDial","sourcePath":"components/scoring/ScoreDial.jsx"},{"name":"CertifiedSeal","sourcePath":"components/seal/CertifiedSeal.jsx"},{"name":"SearchBar","sourcePath":"components/search/SearchBar.jsx"},{"name":"Tabs","sourcePath":"components/tabs/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"8ae2c957cc7f","components/avatar/Avatar.jsx":"b51d82df4805","components/chyron/Chyron.jsx":"7f129fc4aea4","components/episode-card/EpisodeCard.jsx":"81e329050a6c","components/form/Checkbox.jsx":"5a01493d2755","components/form/FieldInfo.jsx":"678ccee9f99b","components/form/FormField.jsx":"134a64e73b30","components/icon/Icon.jsx":"d084e2c1c841","components/menu/MenuItem.jsx":"1f294de720ae","components/pill/Pill.jsx":"bfa98eef4fce","components/review-card/ReviewCard.jsx":"72aef3ad6b8e","components/scoring/ScoreDial.jsx":"e23a70306867","components/seal/CertifiedSeal.jsx":"e316ec2e8cb9","components/search/SearchBar.jsx":"6a6b57d74298","components/tabs/Tabs.jsx":"2cf022aac125","ui_kits/trackstar-app/app.jsx":"98e96d11b782","ui_kits/trackstar-app/data.js":"95a9a0dfe488","ui_kits/trackstar-app/doc-page.js":"f52ae9c02fca","ui_kits/trackstar-app/screen-album.jsx":"09f6f1e5f94c","ui_kits/trackstar-app/screen-episode.jsx":"0702727dff82","ui_kits/trackstar-app/screen-feed.jsx":"46ee565a9319","ui_kits/trackstar-app/screen-hundred.jsx":"ce0beb1ad10e","ui_kits/trackstar-app/screen-lists.jsx":"5ffc85de1b0c","ui_kits/trackstar-app/screen-profile.jsx":"8af74ed70f33","ui_kits/trackstar-app/shell.jsx":"25296916a21e","ui_kits/trackstar-web/app-artist.jsx":"a9e252f769eb","ui_kits/trackstar-web/app.jsx":"c54027a43b3f","ui_kits/trackstar-web/data.js":"68f82fafd23b","ui_kits/trackstar-web/doc-page.js":"f52ae9c02fca","ui_kits/trackstar-web/screen-album.jsx":"85a010601a4d","ui_kits/trackstar-web/screen-artist.jsx":"ffcf03c92cf0","ui_kits/trackstar-web/screen-episode.jsx":"b9e4da2f9ffc","ui_kits/trackstar-web/screen-profile.jsx":"a4b54360f1fe","ui_kits/trackstar-web/shell.jsx":"bd6da3999180"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TrackStarDesignSystem_75f3a7 = window.TrackStarDesignSystem_75f3a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/avatar/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Avatar — production's .avatar: initials, or an image when we have one.
   A failed load falls back to the initials rather than to a broken image, the same discipline the
   artwork uses with the disc glyph. `size` is a free number with 34 as the default, because 34 is
   the only avatar size confirmed in use — the kits' other round shapes mix icon and artwork
   sizes, so there is no named scale to freeze yet. */
function Avatar({
  name = '',
  src,
  size = 34,
  alt,
  className,
  style,
  ...rest
}) {
  const [bad, setBad] = React.useState(false);
  React.useEffect(() => setBad(false), [src]);
  const initials = name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const box = {
    width: size,
    height: size,
    borderRadius: '50%',
    flex: '0 0 auto',
    boxShadow: 'inset 0 0 0 1px var(--border-hairline)',
    ...style
  };
  if (src && !bad) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt || name,
      loading: "lazy",
      onError: () => setBad(true),
      className: className
    }, rest, {
      style: {
        ...box,
        objectFit: 'cover',
        background: 'var(--bg-well)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-label": alt || name || undefined
  }, rest, {
    style: {
      ...box,
      background: 'var(--bg-well)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: Math.max(9, Math.round(size * 0.36)),
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }), initials || null);
}
Object.assign(__ds_scope, { Avatar, __ds_default_components_avatar_Avatar_1q2ec5j: Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/chyron/Chyron.jsx
try { (() => {
/* Chyron — Size: Hero | Card. The orange kicker is welded to the guest name; max three words in the kicker. */
function Chyron({
  kicker = 'This week',
  name,
  meta,
  size = 'hero',
  className,
  style
}) {
  const hero = size === 'hero';
  /* A badge marks the exception, and the kicker is a badge: the format reads "Testing" on 78 of 129
     episodes, so `kicker={null}` (or '') omits the plate rather than drawing an empty orange box.
     With no kicker the name plate closes its own left border — same token, same pixel as the other
     three sides — which is why this needs no `!important` rule from outside the component. */
  const hasKicker = kicker != null && kicker !== '';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'stretch',
      maxWidth: '100%',
      boxShadow: hero ? 'var(--elevation-card)' : 'none',
      ...style
    }
  }, hasKicker ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--accent-default)',
      color: 'var(--text-on-accent)',
      padding: hero ? '0 14px' : '0 10px',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: hero ? 11 : 10,
      letterSpacing: '.17em',
      textTransform: 'uppercase',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(9,7,8,.88)',
      border: '1px solid var(--border-subtle)',
      borderLeft: hasKicker ? 0 : '1px solid var(--border-subtle)',
      padding: hero ? '11px 22px' : '7px 14px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: hero ? 'clamp(26px,2.9vw,44px)' : 17,
      letterSpacing: hero ? '-.022em' : '-.005em',
      lineHeight: 1.04,
      /* Paralucent is four static faces, so a variable axis request does nothing here: the
         guest name takes Bold 600 in the hero and Demi Bold 500 on a card. */
      fontWeight: hero ? 600 : 500,
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, name), meta ? /*#__PURE__*/React.createElement("i", {
    style: {
      fontStyle: 'normal',
      fontSize: hero ? 12 : 11,
      color: 'var(--text-muted)',
      letterSpacing: '.05em'
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { Chyron, __ds_default_components_chyron_Chyron_1xpjqgf: Chyron });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chyron/Chyron.jsx", error: String((e && e.message) || e) }); }

// components/form/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Checkbox — production's .check row: box, label, optional helper. The marketing opt-in on
   sign-up is the live example.
   The box is a native input with accent-color, not a drawn mark: the platform tick, the platform
   focus ring and the platform keyboard behaviour are all correct for free, and the set has no
   check glyph to borrow. The row keeps the 44px minimum, so the label is part of the target. */
function Checkbox({
  label,
  helper,
  checked,
  defaultChecked,
  onChange,
  name,
  id,
  disabled = false,
  status = null,
  className,
  style,
  ...rest
}) {
  const gen = React.useRef('cb' + Math.random().toString(36).slice(2, 8));
  const cid = id || gen.current;
  const hid = cid + '-helper';
  const bad = status === 'bad';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gap: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      minHeight: 'var(--tap-min)',
      padding: '11px 0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    name: name || cid,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    "aria-describedby": helper ? hid : undefined,
    "aria-invalid": bad || undefined
  }, rest, {
    style: {
      width: 22,
      height: 22,
      margin: 0,
      flex: '0 0 auto',
      accentColor: 'var(--accent-default)',
      borderRadius: 'var(--radius-sm)',
      outlineColor: bad ? 'var(--status-bad)' : undefined,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline",
    style: {
      color: bad ? 'var(--status-bad)' : 'var(--text-primary)'
    }
  }, label)), helper ? /*#__PURE__*/React.createElement("span", {
    id: hid,
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)',
      paddingInlineStart: 34,
      marginTop: -8
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Checkbox, __ds_default_components_form_Checkbox_buwwro: Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/form/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/form/FieldInfo.jsx
try { (() => {
/* FieldInfo — production's .field-info / .field-info__trigger: the "what do you use this for?"
   affordance beside an optional field's label.

   Two things about it are not cosmetic, and both come from production's note:

   1. The trigger is type="button" and never a submit. One <form> owns the whole onboarding
      stepper, so a stray submit would finish the flow instead of explaining a field.
   2. It opens on hover, on focus AND on tap. A touch screen has no hover, and the copy is a
      promise about a member's data — it cannot be reachable by pointer alone.

   The set has no info glyph (21 icons, none of them an "i"), so the trigger is a word rather than
   an invented mark. Flagged in readme.md as a candidate for the icon set. */
function FieldInfo({
  label = 'What for?',
  children,
  side = 'start',
  className,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [stuck, setStuck] = React.useState(false);
  const wrap = React.useRef(null);
  const gen = React.useRef('fi' + Math.random().toString(36).slice(2, 8));
  const open = hover || focus || stuck;
  React.useEffect(() => {
    if (!stuck) return;
    const away = e => {
      if (wrap.current && !wrap.current.contains(e.target)) setStuck(false);
    };
    const key = e => {
      if (e.key === 'Escape') setStuck(false);
    };
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('pointerdown', away);
      document.removeEventListener('keydown', key);
    };
  }, [stuck]);
  return /*#__PURE__*/React.createElement("span", {
    ref: wrap,
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    "aria-describedby": open ? gen.current : undefined,
    onClick: () => setStuck(s => !s),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    className: "ts-caption",
    style: {
      border: 0,
      background: 'transparent',
      padding: '4px 0',
      cursor: 'pointer',
      color: open ? 'var(--text-primary)' : 'var(--text-muted)',
      fontWeight: 500,
      borderBottom: '1px dotted var(--border-strong)',
      transition: 'color var(--duration-quick) var(--ease-out)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    id: gen.current,
    role: "tooltip",
    "aria-hidden": !open,
    className: "ts-caption",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      [side === 'end' ? 'right' : 'left']: 0,
      width: 232,
      padding: '10px 12px',
      zIndex: 5,
      background: 'var(--bg-card)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--elevation-card)',
      lineHeight: 1.45,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transform: open ? 'none' : 'translateY(var(--distance-micro))',
      transition: 'opacity var(--duration-quick) var(--ease-out), transform var(--duration-quick) var(--ease-out)'
    }
  }, children));
}
Object.assign(__ds_scope, { FieldInfo, __ds_default_components_form_FieldInfo_1qb5fwt: FieldInfo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/form/FieldInfo.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Track Star icon set — 21 glyphs on a 24px grid, 1.5 stroke, round caps.
// 17 extracted verbatim from the product's icons.svg sprite; menu, more, pin and reset were added
// because the client's own screens use those affordances and the sprite has no glyph for them.
// Swap by name, never fork a variant per icon.
const ICONS = {
  "play": {
    viewBox: "0 0 24 24",
    attrs: "",
    body: "<path d=\"M7 4.5 19 12 7 19.5Z\" fill=\"currentColor\"></path>"
  },
  "pause": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M8.5 5v14M15.5 5v14\"></path>"
  },
  "search": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<circle cx=\"11\" cy=\"11\" r=\"6.25\"></circle><path d=\"M15.6 15.6 20.5 20.5\"></path>"
  },
  "headphones": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M4 14v-2a8 8 0 0 1 16 0v2\"></path><path d=\"M4 13.5h2.4a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1H5.4A1.4 1.4 0 0 1 4 18.7Z\"></path><path d=\"M20 13.5h-2.4a1 1 0 0 0-1 1v3.6a1 1 0 0 0 1 1h1a1.4 1.4 0 0 0 1.4-1.4Z\"></path>"
  },
  "heart": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"",
    body: "<path d=\"M12 20.2C7 16.9 4 14.2 4 10.8A4.3 4.3 0 0 1 12 8.5a4.3 4.3 0 0 1 8 2.3c0 3.4-3 6.1-8 9.4Z\"></path>"
  },
  "bookmark": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"",
    body: "<path d=\"M6 4.8h12v15.4l-6-4.4-6 4.4Z\"></path>"
  },
  "list": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01\"></path>"
  },
  "plus": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M12 5v14M5 12h14\"></path>"
  },
  "comment": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"",
    body: "<path d=\"M20 12.6c0 3.7-3.6 6.6-8 6.6a9.4 9.4 0 0 1-2.4-.3L5 20.5l1.2-3.2A6.3 6.3 0 0 1 4 12.6C4 8.9 7.6 6 12 6s8 2.9 8 6.6Z\"></path>"
  },
  "share": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M12 15.5V4.5M8.2 8 12 4.3 15.8 8\"></path><path d=\"M5 14.5v3.6A1.9 1.9 0 0 0 6.9 20h10.2a1.9 1.9 0 0 0 1.9-1.9v-3.6\"></path>"
  },
  "chevron": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M9.5 5.5 16 12l-6.5 6.5\"></path>"
  },
  "external": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M14 4.8h5.2V10\"></path><path d=\"M19.2 4.8 11 13\"></path><path d=\"M17 14.4v3.7a1.9 1.9 0 0 1-1.9 1.9H6.7a1.9 1.9 0 0 1-1.9-1.9V9.7a1.9 1.9 0 0 1 1.9-1.9h3.7\"></path>"
  },
  "disc": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"",
    body: "<circle cx=\"12\" cy=\"12\" r=\"8\"></circle><circle cx=\"12\" cy=\"12\" r=\"2.4\"></circle>"
  },
  "mic": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<rect x=\"9.4\" y=\"3.6\" width=\"5.2\" height=\"10\" rx=\"2.6\"></rect><path d=\"M5.8 11.6a6.2 6.2 0 0 0 12.4 0\"></path><path d=\"M12 17.8V20.4M9 20.4h6\"></path>"
  },
  "close": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5\"></path>"
  },
  "sliders": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M5 8h9M18 8h1M5 16h3M12 16h7\"></path><circle cx=\"16\" cy=\"8\" r=\"2\"></circle><circle cx=\"10\" cy=\"16\" r=\"2\"></circle>"
  },
  "seal": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\"",
    body: "<path d=\"M12 3.4l1.6 1.7 2.3-.5.6 2.2 2.1 1-1 2.1 1 2.1-2.1 1-.6 2.2-2.3-.5L12 16.4l-1.6-1.7-2.3.5-.6-2.2-2.1-1 1-2.1-1-2.1 2.1-1 .6-2.2 2.3.5Z\"></path>"
  },
  "menu": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"",
    body: "<path d=\"M4 7h16M4 12h16M4 17h16\"></path>"
  },
  "more": {
    viewBox: "0 0 24 24",
    attrs: "",
    body: "<circle cx=\"5.6\" cy=\"12\" r=\"1.6\" fill=\"currentColor\"></circle><circle cx=\"12\" cy=\"12\" r=\"1.6\" fill=\"currentColor\"></circle><circle cx=\"18.4\" cy=\"12\" r=\"1.6\" fill=\"currentColor\"></circle>"
  },
  "pin": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M9.4 3.8h5.2M12 3.8v5.4\"></path><path d=\"M7.8 9.2h8.4L14.7 14H9.3Z\"></path><path d=\"M12 14v6.2\"></path>"
  },
  "reset": {
    viewBox: "0 0 24 24",
    attrs: "fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"",
    body: "<path d=\"M4.9 12a7.1 7.1 0 1 0 2.3-5.2\"></path><path d=\"M4.4 4.9v4.3h4.3\"></path>"
  }
};
function Icon({
  name = 'play',
  size = 24,
  title,
  style,
  className,
  ...rest
}) {
  const g = ICONS[name];
  if (!g) return null;
  const attrs = {};
  g.attrs.replace(/([a-z-]+)="([^"]*)"/g, (_, k, v) => {
    const key = k.replace(/-([a-z])/g, (_2, c) => c.toUpperCase());
    attrs[key] = v;
    return '';
  });
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: g.viewBox,
    width: size,
    height: size,
    role: title ? 'img' : 'presentation',
    "aria-hidden": title ? undefined : true,
    focusable: "false",
    className: className,
    style: {
      display: 'block',
      flex: '0 0 auto',
      color: 'inherit',
      ...style
    }
  }, attrs, rest, {
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + g.body
    }
  }));
}
Object.assign(__ds_scope, { ICONS, Icon, __ds_default_components_icon_Icon_e7wouz: Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Button — Style: Primary | Secondary | Tertiary | Ghost, matching the four the client's sheet
   defines. One Primary per view; the orange is a signal, not a surface.
   Hover is read from the pointer, not assumed: on a touch screen a hover state applied to a tap
   sticks until you tap elsewhere, so the only touch feedback is press — a 3% scale down and no
   colour change, so the action reads the same the whole way through. 44px minimum, always. */
const HOVERABLE = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : false;
function Button({
  variant = 'primary',
  size = 'default',
  icon,
  iconAfter,
  href,
  disabled,
  children,
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const sm = size === 'small';
  const hot = hover && HOVERABLE && !disabled;

  /* background · text · 1px ring — one row per style, so the styles cannot drift apart */
  const skin = {
    primary: {
      background: hot ? 'var(--accent-hover)' : 'var(--accent-default)',
      color: 'var(--text-on-accent)',
      ring: null
    },
    secondary: {
      background: hot ? 'var(--bg-selected)' : 'transparent',
      color: 'var(--accent-default)',
      ring: 'var(--accent-default)'
    },
    tertiary: {
      background: 'var(--bg-selected)',
      color: 'var(--accent-default)',
      ring: null
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      ring: hot ? 'var(--border-strong)' : 'var(--border-hairline)'
    }
  }[variant] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--gap-tight)',
    minHeight: 'var(--tap-min)',
    boxSizing: 'border-box',
    padding: sm ? '10px 20px' : '12px var(--space-5)',
    borderRadius: 'var(--corner-pill)',
    fontFamily: 'var(--font-ui)',
    fontWeight: 500,
    fontSize: sm ? 14 : 15,
    lineHeight: '100%',
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .42 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background .2s, box-shadow .2s, transform .18s var(--ease-stage)',
    transform: down && !disabled ? 'scale(.97)' : 'none',
    background: skin.background,
    color: skin.color,
    boxShadow: skin.ring ? `inset 0 0 0 1px ${skin.ring}` : 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    href: href,
    disabled: !href ? disabled : undefined,
    style: base,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => {
      setHover(false);
      setDown(false);
    },
    onPointerDown: () => setDown(true),
    onPointerUp: () => setDown(false),
    onPointerCancel: () => setDown(false)
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 15 : 16
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: sm ? 15 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button, __ds_default_components_actions_Button_8qpwqe: Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/episode-card/EpisodeCard.jsx
try { (() => {
const FORMATS = {
  testing: 'Testing',
  versus: 'Versus',
  tensongs: 'In 10 songs',
  live: 'Live',
  talk: 'Sit-down',
  extended: 'Extended cut'
};

/* Episode card — Size: Large | Small.
   The still already carries the guest's name burned in, so no pill goes on top of it.
   Metadata is missing for most of the archive: the card simply drops the line rather than filling it. */
function EpisodeCard({
  title,
  format,
  still,
  date,
  duration,
  playable = false,
  size = 'large',
  href = '#',
  className,
  style
}) {
  const [hover, setHover] = React.useState(false);
  /* Stills are hotlinked, so one can vanish. A dead URL falls back to the no-still state
     rather than a broken-image icon. */
  const [badStill, setBadStill] = React.useState(false);
  React.useEffect(() => setBadStill(false), [still]);
  const large = size === 'large';
  const meta = [FORMATS[format] || format, date, duration].filter(Boolean);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      width: large ? 306 : 214,
      maxWidth: '100%',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--bg-shade)',
      marginBottom: 10,
      aspectRatio: '16 / 9'
    }
  }, still && !badStill ? /*#__PURE__*/React.createElement("img", {
    src: still,
    alt: "",
    onError: () => setBadStill(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.05)' : 'none',
      transition: 'transform .5s var(--ease-stage)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)',
      background: 'var(--bg-shade)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "disc",
    size: large ? 30 : 24
  })), playable ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      top: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-on-media)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-media)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play",
    size: 12
  }), "Watch") : null, duration ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 8,
      bottom: 8,
      padding: '3px 7px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-on-media)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: 11,
      color: 'var(--text-on-media)'
    }
  }, duration) : null), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: large ? 15 : 14,
      lineHeight: 1.28,
      color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      transition: 'color .2s'
    }
  }, title), meta.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, meta.join(' · ')) : null);
}
Object.assign(__ds_scope, { EpisodeCard, __ds_default_components_episode_card_EpisodeCard_1lwja4c: EpisodeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/episode-card/EpisodeCard.jsx", error: String((e && e.message) || e) }); }

// components/form/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FormField — production's .field-block / .field-row / .field-status, in our skin.
   The status line belongs to the field: it reserves its own row whether or not it has text, so
   validation arriving never shifts what is under it. One control per field, and the label is
   always a real <label> tied to it.
   16px is the input floor on every type — below that iOS zooms the page on focus. */
const CONTROL = {
  width: '100%',
  minHeight: 'var(--tap-min)',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-ui)',
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: '-.02em',
  color: 'var(--text-primary)',
  background: 'var(--bg-card)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-md)',
  padding: '0 14px',
  outline: 'none',
  appearance: 'none'
};
function FormField({
  label,
  type = 'text',
  value,
  defaultValue,
  onChange,
  placeholder,
  name,
  id,
  status = null,
  statusText,
  helper,
  disabled = false,
  required = false,
  rows = 4,
  options = [],
  className,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const gen = React.useRef('ff' + Math.random().toString(36).slice(2, 8));
  const fid = id || gen.current;
  const sid = fid + '-status';
  const hid = fid + '-helper';
  const bad = status === 'bad',
    ok = status === 'ok';
  const edge = bad ? 'var(--status-bad)' : focus ? 'var(--accent-default)' : 'var(--border-hairline)';
  const control = {
    ...CONTROL,
    borderColor: edge,
    boxShadow: focus && !bad ? '0 0 0 3px color-mix(in srgb,var(--accent-default) 22%,transparent)' : 'none',
    opacity: disabled ? .55 : 1,
    cursor: disabled ? 'not-allowed' : 'auto',
    transition: 'border-color var(--duration-quick) var(--ease-out), box-shadow var(--duration-quick) var(--ease-out)'
  };
  const shared = {
    id: fid,
    name: name || fid,
    value,
    defaultValue,
    onChange,
    disabled,
    required,
    'aria-invalid': bad || undefined,
    'aria-describedby': [statusText ? sid : null, helper ? hid : null].filter(Boolean).join(' ') || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    className: "ts-footnote",
    style: {
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-default)'
    }
  }, " *") : null) : null, type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, shared, {
    rows: rows,
    placeholder: placeholder,
    style: {
      ...control,
      minHeight: 22 * rows,
      padding: '12px 14px',
      lineHeight: 1.4,
      resize: 'vertical'
    }
  })) : type === 'select' ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, shared, {
    style: {
      ...control,
      paddingRight: 40,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      insetInlineEnd: 14,
      top: '50%',
      transform: 'translateY(-50%) rotate(90deg)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 16
  }))) : /*#__PURE__*/React.createElement("input", _extends({}, shared, {
    type: type,
    placeholder: placeholder,
    style: control
  })), /*#__PURE__*/React.createElement("span", {
    id: sid,
    role: bad ? 'alert' : undefined,
    className: "ts-caption",
    style: {
      minHeight: 16,
      display: 'block',
      color: bad ? 'var(--status-bad)' : ok ? 'var(--status-ok)' : 'var(--text-muted)'
    }
  }, statusText || '\u00a0'), helper ? /*#__PURE__*/React.createElement("span", {
    id: hid,
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)',
      marginTop: -2
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { FormField, __ds_default_components_form_FormField_n21ss5: FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/form/FormField.jsx", error: String((e && e.message) || e) }); }

// components/menu/MenuItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MenuItem — one row of the overlay menu, and one row of the search suggestion list. Same anatomy
   in both places: an optional icon, the label, and an optional trailing mark.
   `selected` is the current screen or the highlighted suggestion; `disabled` is a row that exists
   but cannot be taken, which is not the same as a row that is absent. */
function MenuItem({
  label,
  icon,
  trailing,
  selected = false,
  disabled = false,
  divider = false,
  href,
  onClick,
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const ink = disabled ? 'var(--text-muted)' : selected ? 'var(--accent-default)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, href ? {
    href
  } : {
    type: 'button'
  }, {
    onClick: disabled ? undefined : onClick,
    "aria-current": selected ? 'true' : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: ['press', className].filter(Boolean).join(' '),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      minHeight: 52,
      padding: '0 2px',
      textAlign: 'left',
      textDecoration: 'none',
      border: 0,
      background: hover && !disabled ? 'var(--bg-shade)' : 'transparent',
      borderBottom: divider ? '1px solid var(--border-hairline)' : 0,
      color: ink,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .6 : 1,
      transition: 'background var(--duration-quick) var(--ease-out), color var(--duration-quick) var(--ease-out)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    style: {
      flex: '0 0 auto'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "ts-body",
    style: {
      fontWeight: selected ? 500 : 400,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, label), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginInlineStart: 'auto',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      color: 'var(--text-muted)'
    }
  }, typeof trailing === 'string' ? /*#__PURE__*/React.createElement("span", {
    className: "ts-caption"
  }, trailing) : trailing) : null);
}
Object.assign(__ds_scope, { MenuItem, __ds_default_components_menu_MenuItem_1qkxdtu: MenuItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/MenuItem.jsx", error: String((e && e.message) || e) }); }

// components/pill/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill — production's .pill / .pill--big / .pill--empty.
   `empty` is a live state, not a disabled one: it is the slot that has nothing in it yet, which is
   why the component takes no `disabled` prop at all — the two could never be confused. */
const SIZES = {
  default: {
    padding: '4px 10px',
    font: 12,
    icon: 13
  },
  big: {
    padding: '7px 14px',
    font: 13,
    icon: 15
  }
};
function Pill({
  children,
  size = 'default',
  empty = false,
  icon,
  className,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: s.padding,
      borderRadius: 'var(--corner-pill)',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      fontWeight: 400,
      letterSpacing: '-.02em',
      lineHeight: 1.25,
      whiteSpace: 'nowrap',
      background: empty ? 'transparent' : 'var(--bg-shade)',
      color: empty ? 'var(--text-muted)' : 'var(--text-secondary)',
      border: empty ? '1px dashed var(--border-strong)' : '1px solid transparent',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null, children);
}
Object.assign(__ds_scope, { Pill, __ds_default_components_pill_Pill_640h7: Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pill/Pill.jsx", error: String((e && e.message) || e) }); }

// components/review-card/ReviewCard.jsx
try { (() => {
/* Review card — Kind: Review | Quick.
   The anatomy is the client's and it is matched exactly: author and timestamp, score right-aligned,
   the record with its artist, the prose, Standout tracks collapsible with number / title / duration,
   then likes and comments with an overflow at the end. Quick is the same card with nothing but the
   score, for the rows in a feed that are a rating and not a piece of writing. */
function Initials({
  name = '',
  size = 34
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--bg-well)',
      color: 'var(--text-secondary)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: size * 0.36,
      letterSpacing: '-.02em'
    }
  }, initials);
}
function Sleeveless({
  size = 66
}) {
  /* No verified artwork. The missing state is a well with the disc glyph — never a grey box
     pretending to be a picture, and never a collapsed row that breaks the alignment. */
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "No artwork",
    style: {
      width: size,
      height: size,
      flex: '0 0 auto',
      borderRadius: 'var(--corner-cover)',
      background: 'var(--bg-well)',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "disc",
    size: Math.max(14, size * 0.3)
  }));
}
function CountButton({
  icon,
  count,
  label,
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": label,
    className: "press",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      minHeight: 'var(--tap-min)',
      padding: '0 2px',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: on ? 'var(--accent-default)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: '-.02em'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), count);
}
function ReviewCard({
  kind = 'review',
  person,
  ago,
  record,
  artist,
  art,
  score,
  body,
  lines = 2,
  standouts,
  likes,
  replies,
  defaultOpen = true,
  onMore,
  className,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [liked, setLiked] = React.useState(false);
  /* A dead URL must land on the disc glyph, never a broken-image icon. */
  const [badArt, setBadArt] = React.useState(false);
  React.useEffect(() => setBadArt(false), [art]);
  const cover = art && !badArt;
  const quick = kind === 'quick';
  const head = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Initials, {
    name: person,
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ts-footnote",
    style: {
      display: 'block',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, person, " reviewed"), ago ? /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)'
    }
  }, ago) : null), score != null ? /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      flex: '0 0 auto',
      fontSize: quick ? 24 : 28
    }
  }, score) : null);
  if (quick) {
    return /*#__PURE__*/React.createElement("article", {
      className: className,
      style: {
        display: 'grid',
        gap: 10,
        ...style
      }
    }, head, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingInlineStart: 44
      }
    }, cover ? /*#__PURE__*/React.createElement("img", {
      src: art,
      alt: "",
      loading: "lazy",
      onError: () => setBadArt(true),
      style: {
        width: 34,
        height: 34,
        flex: '0 0 auto',
        objectFit: 'cover',
        borderRadius: 'var(--corner-cover)'
      }
    }) : /*#__PURE__*/React.createElement(Sleeveless, {
      size: 34
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("b", {
      className: "ts-subheadline-bold",
      style: {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, record), artist ? /*#__PURE__*/React.createElement("span", {
      className: "ts-caption",
      style: {
        color: 'var(--text-muted)'
      }
    }, artist) : null)));
  }
  return /*#__PURE__*/React.createElement("article", {
    className: className,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, head, record ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: art,
    alt: "",
    loading: "lazy",
    onError: () => setBadArt(true),
    style: {
      width: 66,
      height: 66,
      flex: '0 0 auto',
      objectFit: 'cover',
      borderRadius: 'var(--corner-cover)',
      background: 'var(--bg-well)'
    }
  }) : /*#__PURE__*/React.createElement(Sleeveless, {
    size: 66
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ts-body-bold",
    style: {
      display: 'block',
      textWrap: 'pretty'
    }
  }, record), artist ? /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, artist) : null)) : null, body ? /*#__PURE__*/React.createElement("p", {
    className: "ts-prose-review",
    style: {
      margin: 0,
      color: 'var(--text-primary)',
      ...(lines ? {
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      } : null)
    }
  }, body) : null, standouts && standouts.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      minHeight: 'var(--tap-min)',
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 16,
    style: {
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline-bold"
  }, "Standout tracks"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron",
    size: 18,
    "aria-hidden": "true",
    style: {
      marginInlineStart: 'auto',
      color: 'var(--text-secondary)',
      transform: `rotate(${open ? -90 : 90}deg)`,
      transition: 'transform .24s var(--ease-stage)'
    }
  })), open ? /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, standouts.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t.title || i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '5px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      width: 14,
      color: 'var(--text-muted)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      minWidth: 0,
      flex: 1,
      color: 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, t.title), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)'
    }
  }, t.duration || '—')))) : null) : null, likes != null || replies != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, likes != null ? /*#__PURE__*/React.createElement(CountButton, {
    icon: "heart",
    count: liked ? likes + 1 : likes,
    label: "Like this review",
    on: liked,
    onClick: () => setLiked(l => !l)
  }) : null, replies != null ? /*#__PURE__*/React.createElement(CountButton, {
    icon: "comment",
    count: replies,
    label: "Comments"
  }) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMore,
    "aria-label": "More",
    className: "press",
    style: {
      marginInlineStart: 'auto',
      minHeight: 'var(--tap-min)',
      minWidth: 'var(--tap-min)',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "more",
    size: 20
  }))) : null);
}
Object.assign(__ds_scope, { ReviewCard, __ds_default_components_review_card_ReviewCard_1qk6k8e: ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/review-card/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/scoring/ScoreDial.jsx
try { (() => {
/* Score dial — State: Scored | Empty | Cleared. 0 to 10 with one decimal, with a magnet toward
   whole numbers. The gesture the whole product is built on: it must feel heavy. Never a plain slider.
   Cleared exists because the client's dial carries a Reset affordance, which means a score can be
   taken back. Cleared is not Empty: Empty has never been scored, Cleared just lost a number, so it
   keeps the way back (Undo) for as long as the surface lives. */
const SWEEP = 280; // degrees of travel
const START = -SWEEP / 2; // 0 sits bottom-left, 10 bottom-right

function angleFor(v) {
  return START + v / 10 * SWEEP;
}
function ScoreDial({
  value,
  defaultValue = 0,
  onChange,
  size = 180,
  state,
  caption,
  onReset,
  onUndo,
  className,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value == null ? inner : value;
  const cleared = state === 'cleared';
  const scored = cleared ? false : state ? state === 'scored' : v > 0;
  const ref = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const commit = next => {
    const clamped = Math.min(10, Math.max(0, next));
    // magnet: whole numbers pull anything within a quarter point
    const whole = Math.round(clamped);
    const pulled = Math.abs(clamped - whole) < 0.25 ? whole : clamped;
    const rounded = Math.round(pulled * 10) / 10;
    if (value == null) setInner(rounded);
    if (onChange) onChange(rounded);
  };
  const fromPointer = e => {
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    let deg = Math.atan2(dx, -dy) * 180 / Math.PI; // 0 = up, clockwise
    if (deg < START - 20) deg = START;
    if (deg > START + SWEEP + 20) deg = START + SWEEP;
    commit((deg - START) / SWEEP * 10);
  };
  const onDown = e => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    fromPointer(e);
  };
  const onMove = e => {
    if (dragging) fromPointer(e);
  };
  const onUp = () => setDragging(false);
  const onKey = e => {
    const step = e.shiftKey ? 1 : 0.1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      commit(v + step);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      commit(v - step);
    }
  };
  const arc = scored ? v / 10 * SWEEP : 0;
  const deg = angleFor(scored ? v : 0);
  const rad = (deg - 90) * Math.PI / 180;
  const track = size / 2 - 13;
  const knob = size * 0.1;
  /* Reset and Undo sit inside the dial, so they must not start a drag. */
  const swallow = e => e.stopPropagation();
  const inlineAction = (label, icon, fn) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onPointerDown: swallow,
    onClick: e => {
      e.stopPropagation();
      fn();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 6,
      minHeight: 34,
      padding: '0 10px',
      border: 0,
      background: 'transparent',
      borderRadius: 'var(--corner-pill)',
      cursor: 'pointer',
      pointerEvents: 'auto',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '-.01em',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), label);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    role: "slider",
    tabIndex: 0,
    "aria-valuemin": 0,
    "aria-valuemax": 10,
    "aria-valuenow": scored ? v : undefined,
    "aria-label": "Your score out of ten",
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onKeyDown: onKey,
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--bg-raised)',
      touchAction: 'none',
      cursor: dragging ? 'grabbing' : 'grab',
      userSelect: 'none',
      boxShadow: scored ? 'var(--elevation-card), var(--elevation-on-air)' : 'var(--elevation-card)',
      transition: dragging ? 'none' : 'box-shadow .3s',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: `conic-gradient(from ${180 + START}deg, var(--accent-default) 0deg ${arc}deg, transparent ${arc}deg)`,
      opacity: scored ? 1 : 0,
      transition: dragging ? 'none' : 'opacity .3s',
      WebkitMask: `radial-gradient(circle at 50% 50%, transparent ${size / 2 - 9}px, #000 ${size / 2 - 9}px)`,
      mask: `radial-gradient(circle at 50% 50%, transparent ${size / 2 - 9}px, #000 ${size / 2 - 9}px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: 'var(--text-primary)',
      boxShadow: 'var(--elevation-card)',
      transform: `translate(${Math.cos(rad) * track - knob / 2}px, ${Math.sin(rad) * track - knob / 2}px)`,
      transition: dragging ? 'none' : 'transform .32s var(--ease-stage)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      alignContent: 'center',
      pointerEvents: 'none',
      padding: '0 14%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-score)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: size * 0.33,
      lineHeight: 1,
      color: scored ? 'var(--accent-score)' : 'var(--text-muted)'
    }
  }, scored ? v.toFixed(1) : '–'), scored && onReset ? inlineAction('Reset', 'reset', onReset) : null, cleared && onUndo ? inlineAction('Undo', 'reset', onUndo) : null, scored && onReset || cleared && onUndo ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      letterSpacing: '.02em',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, caption != null ? caption : cleared ? 'Score cleared' : scored ? 'tap to change' : 'slide to score')));
}
Object.assign(__ds_scope, { ScoreDial, __ds_default_components_scoring_ScoreDial_1dfpalw: ScoreDial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scoring/ScoreDial.jsx", error: String((e && e.message) || e) }); }

// components/seal/CertifiedSeal.jsx
try { (() => {
/* Certified seal. Two jobs, one object, because the client's file uses it for both:
   — a record's certified community score, the seal at 7.5 over "10.3k Ratings" (pass `score`);
   — a person's badge, earned at five scores, Certified or Locked (no `score`).
   Die-cut either way: a 22-point starburst, the same silhouette as Icon/seal, and never a corner
   radius. Below ~80px there is no room for three lines, so it reduces to the numeral alone. */
const POINTS = 22;
const STARBURST = 'polygon(' + Array.from({
  length: POINTS * 2
}, (_, i) => {
  const a = i / (POINTS * 2) * Math.PI * 2 - Math.PI / 2;
  const r = i % 2 ? 0.855 : 1;
  return `${(50 + 50 * r * Math.cos(a)).toFixed(2)}% ${(50 + 50 * r * Math.sin(a)).toFixed(2)}%`;
}).join(', ') + ')';
function CertifiedSeal({
  state = 'certified',
  score,
  ratings,
  scores = 0,
  required = 5,
  size = 132,
  compact,
  className,
  style
}) {
  const locked = state === 'locked';
  const missing = Math.max(required - scores, 0);
  const tight = compact || size < 80;
  const ink = locked ? 'var(--text-secondary)' : 'var(--text-on-accent)';
  const sub = locked ? 'var(--text-muted)' : 'var(--text-on-accent)';
  const serif = {
    fontFamily: 'var(--font-prose)',
    fontStyle: 'italic',
    fontWeight: 400,
    lineHeight: 1
  };
  const label = {
    fontFamily: 'var(--font-ui)',
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '.1em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "img",
    "aria-label": score != null ? `Certified ${score}${ratings ? ` from ${ratings}` : ''}` : locked ? `Not certified yet, ${missing} more scores` : 'Certified',
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: size,
      height: size,
      position: 'relative',
      flex: '0 0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: STARBURST,
      WebkitClipPath: STARBURST,
      borderRadius: 'var(--radius-none)',
      background: locked ? 'var(--bg-shade)' : 'var(--accent-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      justifyItems: 'center',
      gap: 2,
      textAlign: 'center',
      padding: '0 14%'
    }
  }, score != null ? tight ? /*#__PURE__*/React.createElement("b", {
    style: {
      ...serif,
      fontSize: size * 0.4,
      color: ink
    }
  }, score) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", {
    style: {
      ...serif,
      fontSize: size * 0.118,
      color: ink
    }
  }, "Certified"), /*#__PURE__*/React.createElement("b", {
    style: {
      ...serif,
      fontSize: size * 0.35,
      color: ink,
      marginTop: -1
    }
  }, score), ratings ? /*#__PURE__*/React.createElement("i", {
    style: {
      ...label,
      fontSize: Math.max(7, size * 0.058),
      color: sub,
      opacity: .82
    }
  }, ratings) : null) : tight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "seal",
    size: size * 0.44,
    style: {
      color: ink
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "seal",
    size: size * 0.15,
    style: {
      color: ink,
      opacity: locked ? .8 : .72
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      ...serif,
      fontSize: size * 0.185,
      color: ink
    }
  }, "Certified"), /*#__PURE__*/React.createElement("i", {
    style: {
      ...label,
      fontSize: Math.max(9, size * 0.072),
      letterSpacing: '.12em',
      color: sub,
      opacity: locked ? 1 : .74
    }
  }, locked ? `${missing} more ${missing === 1 ? 'score' : 'scores'}` : `${required} scores in`))));
}
Object.assign(__ds_scope, { CertifiedSeal, __ds_default_components_seal_CertifiedSeal_18y6tk2: CertifiedSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/seal/CertifiedSeal.jsx", error: String((e && e.message) || e) }); }

// components/search/SearchBar.jsx
try { (() => {
/* SearchBar — the engine of the product, and it stays visible in the header on every screen.
   16px input minimum, because anything smaller makes iOS zoom the whole page on focus.
   The placeholder is the client's, verbatim: "Search Albums, Artists...". */
function SearchBar({
  value,
  onChange,
  placeholder = 'Search Albums, Artists...',
  onSubmit,
  readOnly,
  onClick,
  className,
  style
}) {
  const [inner, setInner] = React.useState('');
  const v = value == null ? inner : value;
  const set = next => {
    if (value == null) setInner(next);
    if (onChange) onChange(next);
  };
  return /*#__PURE__*/React.createElement("form", {
    className: className,
    onSubmit: e => {
      e.preventDefault();
      if (onSubmit) onSubmit(v);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 1,
      minWidth: 0,
      minHeight: 'var(--tap-min)',
      boxSizing: 'border-box',
      padding: '0 14px',
      background: 'var(--bg-well)',
      borderRadius: 'var(--corner-pill)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    style: {
      color: 'var(--text-secondary)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => set(e.target.value),
    placeholder: placeholder,
    readOnly: readOnly,
    onClick: onClick,
    "aria-label": "Search albums and artists",
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-primary)',
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: '-.02em',
      cursor: readOnly ? 'pointer' : 'text'
    }
  }), v ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => set(''),
    "aria-label": "Clear search",
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { SearchBar, __ds_default_components_search_SearchBar_1ea6ht6: SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/tabs/Tabs.jsx
try { (() => {
/* Tabs — the segmented control from the client's sheet: a tan track with an orange pill on the
   selected segment, two to four segments sharing the width equally.
   The labels are Level 1 and verbatim: All reviews · Featured · Following, All lists · Featured ·
   Following, Reviews · Lists · Saved, Reviews · Tracklist. Never rename a tab.

   A component must not clip its own labels, and it cannot know which font family loaded, how wide
   its container is, or what the fallback's metrics are. So the fit is measured, not guessed: after
   layout, if any segment overflows, the control steps down one rung (type and padding together)
   and measures again. Two rungs, then ellipsis as a floor that should never be reached. The old
   rule keyed off segment count, which measured the wrong thing entirely — three segments with one
   long label is exactly the case that overflows, and four short ones fit fine.

   The fit state carries a generation counter, and every reset bumps it. Resetting by writing 0
   over a 0 is how this used to fail on first paint: the mount reset landed in the same commit as
   the mount measurement, React saw identical state and bailed out of the re-render, so the
   measured step-down never happened and the first segment sat there clipped until something
   unrelated re-rendered the control. A generation makes the state genuinely new, so the loop runs
   to a fitting rung before the browser paints — a card is a first paint, and it has to be right. */
const RUNGS = [{
  font: 15,
  pad: 14
}, {
  font: 14,
  pad: 10
}, {
  font: 13,
  pad: 7
}];
function Tabs({
  items = [],
  value,
  onChange,
  className,
  style
}) {
  const norm = items.map(i => Array.isArray(i) ? {
    value: i[0],
    label: i[1]
  } : i);
  const ref = React.useRef(null);
  const labelKey = norm.map(t => t.label).join('|');
  const [fit, setFit] = React.useState({
    rung: 0,
    gen: 0
  });
  const invalidate = React.useCallback(() => setFit(f => ({
    rung: 0,
    gen: f.gen + 1
  })), []);

  /* step down while anything clips — synchronously, before paint */
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el || fit.rung >= RUNGS.length - 1) return;
    const clipped = Array.from(el.children).some(b => b.scrollWidth > b.clientWidth + 0.5);
    if (clipped) setFit(f => ({
      rung: f.rung + 1,
      gen: f.gen
    }));
  }, [fit, labelKey]);

  /* a different label set deserves a fresh start — but not on mount, where the measurement above
     is the fresh start and a reset would only cancel it */
  const mounted = React.useRef(false);
  React.useLayoutEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    invalidate();
  }, [labelKey, invalidate]);

  /* a wider container and a late-loading family both change the metrics */
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ro,
      first = true;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        if (first) {
          first = false;
          return;
        }
        invalidate();
      });
      ro.observe(el);
    }
    let cancelled = false;
    if (document.fonts && document.fonts.status !== 'loaded' && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) invalidate();
      });
    }
    return () => {
      cancelled = true;
      if (ro) ro.disconnect();
    };
  }, [invalidate]);
  const {
    font,
    pad
  } = RUNGS[fit.rung];
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    ref: ref,
    className: className,
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gap: 2,
      padding: 3,
      background: 'var(--bg-well)',
      borderRadius: 'var(--corner-pill)',
      ...style
    }
  }, norm.map(t => {
    const on = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      className: "press",
      style: {
        minHeight: 'var(--tap-min)',
        padding: `0 ${pad}px`,
        border: 0,
        cursor: 'pointer',
        borderRadius: 'var(--corner-pill)',
        fontFamily: 'var(--font-ui)',
        fontWeight: 500,
        fontSize: font,
        letterSpacing: '-.02em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        background: on ? 'var(--accent-default)' : 'transparent',
        color: on ? 'var(--text-on-accent)' : 'var(--text-secondary)',
        transition: 'background .2s, color .2s'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs, __ds_default_components_tabs_Tabs_z969a5: Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/app.jsx
try { (() => {
/* The click-through. Route state only — every screen is its own file.
   `window.TS_SCREEN` lets a card page boot straight into one screen; `window.TS_PROFILE` picks
   which of the three profile states that page shows. */
function App() {
  const params = new URLSearchParams(location.search);
  const forced = params.get('theme') || window.TS_THEME;
  const [route, setRoute] = React.useState(window.TS_SCREEN || params.get('screen') || 'feed');
  const [theme, setTheme] = React.useState(() => forced || localStorage.getItem('ts-theme') || 'auto');
  const [menu, setMenu] = React.useState(false);
  const [create, setCreate] = React.useState(false);
  const [back, setBack] = React.useState([]);

  /* auto follows the device through prefers-color-scheme and is the default, because most
     people never open settings and their phone already knows what they want. */
  React.useEffect(() => {
    const r = document.documentElement;
    if (theme === 'auto') r.removeAttribute('data-theme');else r.setAttribute('data-theme', theme);
    if (!forced) localStorage.setItem('ts-theme', theme);
  }, [theme, forced]);
  const go = r => {
    setBack(b => [...b, route]);
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const goBack = () => {
    setBack(b => {
      const prev = b[b.length - 1] || 'feed';
      setRoute(prev);
      return b.slice(0, -1);
    });
    window.scrollTo(0, 0);
  };

  /* Creating opens from the surface you are creating from — the composer on a record, the + on an
     empty slot, the CTA in an empty state. Production has no floating action button. */
  const plus = () => setCreate(true);
  const profileState = window.TS_PROFILE || {};
  const has = n => typeof window[n] === 'function';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppBar, {
    home: route === 'feed',
    onBack: goBack,
    onMenu: () => setMenu(true),
    onSearch: () => setMenu(false)
  }), route === 'feed' && has('FeedScreen') ? /*#__PURE__*/React.createElement(FeedScreen, {
    go: go,
    onPlus: plus
  }) : null, route === 'album' && has('AlbumScreen') ? /*#__PURE__*/React.createElement(AlbumScreen, {
    go: go,
    block: window.TS_BLOCK || 'theirs'
  }) : null, route === 'lists' && has('ListsScreen') ? /*#__PURE__*/React.createElement(ListsScreen, {
    go: go,
    onPlus: plus
  }) : null, route === 'hundred' && has('HundredScreen') ? /*#__PURE__*/React.createElement(HundredScreen, {
    go: go
  }) : null, route === 'profile' && has('ProfileScreen') ? /*#__PURE__*/React.createElement(ProfileScreen, {
    who: profileState.who,
    initialTab: profileState.tab,
    onPlus: plus
  }) : null, route === 'episode' && has('EpisodeScreen') ? /*#__PURE__*/React.createElement(EpisodeScreen, {
    go: go,
    onPlus: plus
  }) : null, /*#__PURE__*/React.createElement(MenuModal, {
    open: menu,
    onClose: () => setMenu(false),
    route: route,
    go: go,
    theme: theme,
    setTheme: setTheme
  }), has('CreateFlow') ? /*#__PURE__*/React.createElement(CreateFlow, {
    open: create,
    onClose: () => setCreate(false)
  }) : null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/data.js
try { (() => {
/* Sample data. Content follows the client's screens verbatim wherever they wrote it — names,
   review copy, list titles, the Trackstar 100 rows, the counter values.

   ARTWORK RULE: every URL in this file was resolved through the iTunes Search API and then
   load-tested in the browser. A record we cannot resolve carries
   `art: null` and renders the disc-glyph missing state — never a broken image, and never a grey
   box pretending to be a picture. Their own export shows placeholders in exactly those places
   (the Trackstar 100 rows, Dark Side of the Moon). Components fall back on `onError` too, so a
   URL that dies later degrades to the same glyph instead of a broken-image icon. */
const ART = {
  petSounds: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/35/bb/c4/35bbc4eb-9387-97b0-b138-64b7a949ea43/13UABIM03512.rgb.jpg/600x600bb.jpg',
  moonRiver: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/62/50/426250f9-7e39-f907-687c-442caa436636/dj.nhptxziz.jpg/600x600bb.jpg',
  graceland: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/92/0c/8c/920c8c14-cf08-a973-e4c1-8792f1e9183c/886443445680.jpg/600x600bb.jpg',
  okComputer: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg',
  worldMusicRadio: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/70/cc/01/70cc0183-96b3-06e1-2f8b-484ba370e4ea/23UMGIM69122.rgb.jpg/600x600bb.jpg',
  aLoveSupreme: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e5/24/aa/e524aacd-467b-66f3-8931-0fcd6750a4b9/08UMGIM07914.rgb.jpg/600x600bb.jpg',
  revolver: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/97/f4/3a/97f43ab4-9fdf-7a41-e430-7c6c313f3883/13UMGIM63887.rgb.jpg/600x600bb.jpg',
  whatsGoingOn: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/76/36/2d/76362d74-cb7a-8ef9-104e-cde1d858e9a9/20UMGIM95279.rgb.jpg/600x600bb.jpg',
  ziggy: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/5f/fa/56/5ffa56c2-ea1f-7a17-6bad-192ff9b6476d/825646124206.jpg/600x600bb.jpg',
  heavenOrLasVegas: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/76/cd/61/76cd61e7-0714-dce5-c48e-0f05f8fcb84b/652637001280.png/600x600bb.jpg',
  ledZepIV: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/15/9b/5c159b27-95ca-b9a7-84e3-28e795fffd39/dj.kvkrpptq.jpg/600x600bb.jpg',
  mbdtf: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/37/da/7c/37da7cc5-2b6f-9bb8-30ba-8a8c3be3e16a/00602527584973.rgb.jpg/600x600bb.jpg'
};
const MBDTF_STANDOUTS = [{
  title: 'Blame Game',
  duration: '2:00'
}, {
  title: 'So Appalled',
  duration: '10:30'
}, {
  title: 'All of the Lights',
  duration: '3:00'
}];
window.TS = {
  /* ---------- Level 3 proposal: the episode screen, which does not exist in production ---------- */
  episode: {
    guest: 'Questlove',
    kicker: 'Testing',
    title: "Testing Questlove's Music Knowledge",
    date: 'Jul 3',
    duration: '12 min',
    videoId: 'dQw4w9WgXcQ',
    still: 'https://ugc.production.linktr.ee/8b81034b-5185-4e3d-bec4-e0a915799447_ab6772ab000016924bea5a17acfd2d97fe0d592f.jpeg',
    blurb: 'Twelve minutes, ten songs, one drummer who names a record from the intro fill alone.',
    guessed: 7
  },
  /* Setlists do not exist as data yet. This is the section designed as if they did. */
  tracklist: [{
    t: 'God Only Knows',
    a: 'The Beach Boys',
    guessed: true,
    score: '9.4',
    art: ART.petSounds
  }, {
    t: 'Let Down',
    a: 'Radiohead',
    guessed: true,
    score: '9.3',
    art: ART.okComputer
  }, {
    t: 'Graceland',
    a: 'Paul Simon',
    guessed: false,
    score: null,
    art: ART.graceland
  }, {
    t: 'Calling Your Name',
    a: 'Jon Batiste',
    guessed: true,
    score: '8.9',
    art: ART.worldMusicRadio
  }, {
    t: 'Moon River',
    a: 'Frank Ocean',
    guessed: true,
    score: null,
    art: ART.moonRiver
  }, {
    t: "Wouldn't It Be Nice",
    a: 'The Beach Boys',
    guessed: false,
    score: null,
    art: ART.petSounds
  }, {
    t: 'Exit Music (For a Film)',
    a: 'Radiohead',
    guessed: true,
    score: '9.1',
    art: ART.okComputer
  }, {
    t: 'Diamonds on the Soles of Her Shoes',
    a: 'Paul Simon',
    guessed: true,
    score: '8.6',
    art: ART.graceland
  }, {
    t: 'Caroline, No',
    a: 'The Beach Boys',
    guessed: false,
    score: null,
    art: ART.petSounds
  }, {
    t: 'The Boy in the Bubble',
    a: 'Paul Simon',
    guessed: true,
    score: '9.0',
    art: ART.graceland
  }],
  /* 99 of 129 episodes carry no date or duration. The rail shows that honestly. */
  more: [{
    title: "Testing Travis Barker's Music Knowledge",
    format: 'testing',
    playable: true,
    date: 'Jul 10',
    duration: '8 min',
    still: 'https://ugc.production.linktr.ee/fc166702-7fcc-483e-907f-8a9298b94f6e_maxresdefault.jpeg'
  }, {
    title: 'A History of Pop Punk in 10 songs',
    format: 'tensongs',
    still: 'https://ugc.production.linktr.ee/53b80022-8cce-4bdd-a042-1aaf4155194b_hqdefault.jpeg'
  }, {
    title: "Hip-Hop's Origin Story in 10 Songs",
    format: 'tensongs',
    still: 'https://ugc.production.linktr.ee/a5de1c9a-3919-470a-a4c0-759d04c62297_hqdefault.jpeg'
  }, {
    title: 'Questlove Teaches Us How to Listen',
    format: 'talk',
    still: 'https://ugc.production.linktr.ee/c1b5a835-b396-4f91-b57b-d2eee0cf033c_maxresdefault.jpeg'
  }],
  /* ---------- Feed. Their first card verbatim, including the truncated review. ---------- */
  feed: {
    'all-reviews': [{
      person: 'Bardi Moradi',
      ago: '2 mins ago',
      score: '9.4',
      record: 'My Beautiful Dark Twisted Fantasy',
      artist: 'Kanye West',
      art: ART.mbdtf,
      standouts: MBDTF_STANDOUTS,
      likes: '10k',
      replies: '100',
      body: "I'm mad basic. I know. This is a super duper long review innit. You can't see the whole thing…"
    }, {
      person: 'Nadia Oyelaran',
      ago: '18 mins ago',
      score: '9.1',
      record: 'Pet Sounds',
      artist: 'The Beach Boys',
      art: ART.petSounds,
      likes: '4.2k',
      replies: '61',
      defaultOpen: false,
      standouts: [{
        title: 'God Only Knows',
        duration: '2:51'
      }, {
        title: "Wouldn't It Be Nice",
        duration: '2:33'
      }, {
        title: 'Caroline, No',
        duration: '2:17'
      }],
      body: 'Recorded by a man who would not leave the studio, for people who would not sit still. Still wins.'
    }, {
      person: 'Theo Marsh',
      ago: '1 hr ago',
      score: '8.1',
      record: 'Moon River',
      artist: 'Frank Ocean',
      art: ART.moonRiver
    }, {
      person: 'Ivy Sandoval',
      ago: '3 hrs ago',
      score: '7.6',
      record: 'Graceland',
      artist: 'Paul Simon',
      art: ART.graceland,
      likes: '812',
      replies: '9',
      defaultOpen: false,
      standouts: [{
        title: 'The Boy in the Bubble',
        duration: '3:59'
      }, {
        title: 'Diamonds on the Soles of Her Shoes',
        duration: '5:45'
      }],
      body: 'Every argument about this record is worth having and none of them make it less good.'
    }],
    featured: [{
      person: 'Track Star',
      ago: 'Yesterday',
      score: '9.3',
      record: 'OK Computer',
      artist: 'Radiohead',
      art: ART.okComputer,
      likes: '18k',
      replies: '402',
      standouts: [{
        title: 'Let Down',
        duration: '4:59'
      }, {
        title: 'Exit Music (For a Film)',
        duration: '4:24'
      }],
      body: 'Picked by the moderators this week: the record guests name off two bars of the intro.'
    }, {
      person: 'Nadia Oyelaran',
      ago: '2 days ago',
      score: '8.8',
      record: 'Pet Sounds',
      artist: 'The Beach Boys',
      art: ART.petSounds,
      likes: '6.1k',
      replies: '88',
      defaultOpen: false,
      standouts: [{
        title: 'God Only Knows',
        duration: '2:51'
      }]
    }],
    following: [{
      person: 'Theo Marsh',
      ago: '40 mins ago',
      score: '9.3',
      record: 'OK Computer',
      artist: 'Radiohead',
      art: ART.okComputer,
      likes: '2.9k',
      replies: '37',
      standouts: [{
        title: 'Let Down',
        duration: '4:59'
      }, {
        title: 'Exit Music (For a Film)',
        duration: '4:24'
      }],
      body: 'Put on Let Down in a moving vehicle at night and try to have an opinion about anything else.'
    }]
  },
  /* Kept for the episode proposal, which had its own review list before the feed existed. */
  reviews: [{
    person: 'Nadia Oyelaran',
    ago: '2 mins ago',
    score: '9.4',
    replies: '7',
    likes: '1.2k',
    body: 'He names it off the drum fill. Twelve seconds. I have watched it four times and I still do not understand it.'
  }, {
    person: 'Theo Marsh',
    ago: '1 hr ago',
    score: '8.1',
    replies: '2',
    likes: '340',
    body: 'Best format they have. No set, no lighting, just a man on a pavement being asked a hard question.'
  }, {
    person: 'Ivy Sandoval',
    ago: '3 hrs ago',
    score: '7.6'
  }],
  /* ---------- Album. Their content: title, artist, Rock · 1973, seal at 7.5, dial at 8.3. ---------- */
  album: {
    title: 'Dark Side of the Moon',
    artist: 'Pink Floyd',
    genre: 'Rock',
    year: '1973',
    art: null,
    // not on Apple Music as an album — only tribute records. Missing-artwork state.
    room: '7.5',
    ratings: '10.3k Ratings',
    mine: 8.3,
    tracks: [{
      title: 'Speak to Me',
      duration: '1:30'
    }, {
      title: 'Breathe',
      duration: '2:43'
    }, {
      title: 'On the Run',
      duration: '3:30'
    }, {
      title: 'Time',
      duration: '6:53'
    }, {
      title: 'The Great Gig in the Sky',
      duration: '4:36'
    }, {
      title: 'Money',
      duration: '6:23'
    }, {
      title: 'Us and Them',
      duration: '7:49'
    }, {
      title: 'Any Colour You Like',
      duration: '3:26'
    }, {
      title: 'Brain Damage',
      duration: '3:46'
    }, {
      title: 'Eclipse',
      duration: '2:03'
    }],
    reviews: [{
      person: 'Bardi Moradi',
      ago: '2 mins ago',
      score: '9.4',
      likes: '10k',
      replies: '100',
      body: "I'm mad basic. I know. This is a super duper long review innit. You can't see the whole thing…",
      standouts: [{
        title: 'Time',
        duration: '6:53'
      }, {
        title: 'Us and Them',
        duration: '7:49'
      }, {
        title: 'Eclipse',
        duration: '2:03'
      }]
    }, {
      person: 'Theo Marsh',
      ago: '5 hrs ago',
      score: '7.2',
      likes: '1.1k',
      replies: '24',
      defaultOpen: false,
      body: 'Every sound on it has been used in an advert since, and it still holds together for forty-three minutes.',
      standouts: [{
        title: 'Money',
        duration: '6:23'
      }]
    }]
  },
  /* ---------- The Trackstar 100. Their rows, counters and copy, verbatim. ---------- */
  hundred: {
    title: 'The Trackstar 100',
    by: 'Jack Coyne',
    desc: 'The 100 greatest albums decided by the Track Star community.',
    link: 'Learn how the ranking works.',
    counters: [['1.7k', 'Raters'], ['14.6k', 'Ratings'], ['4.5k', 'Albums']],
    rows: [{
      album: 'A love Supreme',
      artist: 'John Coltrane',
      score: '9.1',
      ratings: '10k ratings',
      art: ART.aLoveSupreme
    }, {
      album: 'Revolver',
      artist: 'The Beatles',
      score: '9.1',
      ratings: '800 ratings',
      art: ART.revolver
    }, {
      album: "What's Going On?",
      artist: 'Marvin Gaye',
      score: '8.9',
      ratings: '800 ratings',
      art: ART.whatsGoingOn
    }, {
      album: 'Ziggy Stardust',
      artist: 'David Bowie',
      score: '8.9',
      ratings: '800 ratings',
      art: ART.ziggy
    }, {
      album: 'Heaven or Las Vegas',
      artist: 'Cocteau Twins',
      score: '8.9',
      ratings: '800 ratings',
      art: ART.heavenOrLasVegas
    }, {
      album: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      score: '8.9',
      ratings: '800 ratings',
      art: ART.ledZepIV
    }, {
      album: 'Pet Sounds',
      artist: 'The Beach Boys',
      score: '8.8',
      ratings: '9.4k ratings',
      art: ART.petSounds
    }, {
      album: 'OK Computer',
      artist: 'Radiohead',
      score: '8.8',
      ratings: '3.1k ratings',
      art: ART.okComputer
    }]
  },
  /* ---------- Profiles. Creator and viewer are two versions, not one screen with a swap. ---------- */
  me: {
    name: 'Bardi Moradi',
    handle: '@bardi__',
    bio: 'Reviews at 2am. Wrong about Steely Dan.',
    location: 'NY, New York',
    link: '@Bardi__',
    counters: [['10', 'Reviews'], ['10', 'Followers'], ['20', 'Following']],
    top5: [{
      art: ART.petSounds,
      title: 'Pet Sounds'
    }, {
      art: ART.moonRiver,
      title: 'Moon River'
    }, {
      art: ART.okComputer,
      title: 'OK Computer'
    }],
    rotation: [{
      art: ART.graceland,
      title: 'Graceland'
    }]
  },
  other: {
    name: 'Jack Coyne',
    handle: '@jackcoyne',
    bio: 'Built the Trackstar 100. Still arguing about number 4.',
    location: 'London',
    link: '@jackcoyne',
    counters: [['48', 'Reviews'], ['12.4k', 'Followers'], ['96', 'Following']],
    top5: [{
      art: ART.petSounds,
      title: 'Pet Sounds'
    }, {
      art: ART.graceland,
      title: 'Graceland'
    }, {
      art: ART.okComputer,
      title: 'OK Computer'
    }, {
      art: ART.worldMusicRadio,
      title: 'World Music Radio'
    }],
    rotation: [{
      art: ART.moonRiver,
      title: 'Moon River'
    }]
  },
  /* ---------- Lists. Their two rows, plus the moderator-curated Featured tab. ---------- */
  lists: {
    'all-lists': [{
      name: 'The Trackstar 100',
      by: 'Jack Coyne',
      desc: 'The 100 greatest albums decided by the Track Star community.',
      covers: [{
        art: ART.aLoveSupreme
      }, {
        art: ART.revolver
      }, {
        art: ART.petSounds
      }, {
        art: ART.okComputer
      }]
    }, {
      name: 'Albums to fight your demons to',
      by: 'Bardi Moradi',
      desc: 'Because angst deserves a soundtrack',
      covers: [{
        art: ART.okComputer
      }, {
        art: ART.moonRiver
      }, {
        art: ART.graceland
      }]
    }, {
      name: 'Records that open with a drum break',
      by: 'Nadia Oyelaran',
      desc: 'Fourteen of them. Argue in the comments.',
      covers: [{
        art: ART.petSounds
      }, {
        art: ART.worldMusicRadio
      }, {
        art: ART.petSounds
      }]
    }],
    featured: [{
      name: 'Moderators: start here',
      by: 'Track Star',
      desc: 'Where to begin if you have never scored a record.',
      note: 'Curated by moderators',
      covers: [{
        art: ART.petSounds
      }, {
        art: ART.petSounds
      }, {
        art: ART.graceland
      }]
    }, {
      name: 'The canon, argued about',
      by: 'Track Star',
      desc: 'Twenty-five records the community cannot agree on.',
      note: 'Curated by moderators',
      covers: [{
        art: ART.petSounds
      }, {
        art: ART.graceland
      }, {
        art: ART.okComputer
      }]
    }],
    following: [{
      name: 'Sit-downs worth the full hour',
      by: 'Nadia Oyelaran',
      desc: 'Six episodes where nobody was in a hurry.',
      covers: [{
        art: ART.worldMusicRadio
      }, {
        art: ART.petSounds
      }]
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-album.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Album — Level 1 structure: the header block, the Review · Add to · Play action row, the two
   scores, then the Reviews · Tracklist tabs. Their header is centred and ours is not; that
   disagreement is one of the things the Level 3 comparison puts side by side, so the matched
   version below stays centred exactly as they drew it.

   The three score blocks are the Level 3 pair: ScoreBlockTheirs is what exists today, A and B are
   proposals. They are exported separately so the comparison page can show all three at once. */

/* Today: the seal at 7.5 and the dial at 8.3, same size, same orange, nothing saying which is
   the room and which is you. */
function ScoreBlockTheirs({
  mine,
  onMine,
  cleared,
  onReset,
  onUndo
}) {
  const a = TS.album;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(CertifiedSeal, {
    state: "certified",
    score: a.room,
    ratings: a.ratings,
    size: 136
  }), /*#__PURE__*/React.createElement(ScoreDial, {
    value: cleared ? 0 : mine,
    onChange: onMine,
    size: 148,
    state: cleared ? 'cleared' : undefined,
    onReset: onReset,
    onUndo: onUndo
  }));
}

/* Proposal A — the room shouts, you annotate. The community score keeps display scale because it
   is the thing 10.3k people made; your score drops to inline scale and gains a name. One orange
   numeral at display size, which is the rule the rest of the product already follows. */
function ScoreBlockA({
  mine,
  onMine,
  cleared,
  onReset,
  onUndo
}) {
  const a = TS.album;
  const [open, setOpen] = React.useState(false);
  const delta = (mine - Number(a.room)).toFixed(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "The room"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(CertifiedSeal, {
    state: "certified",
    score: a.room,
    ratings: a.ratings,
    size: 132
  }), /*#__PURE__*/React.createElement("p", {
    className: "ts-footnote",
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      maxWidth: '20ch'
    }
  }, "Certified at ", a.ratings.toLowerCase(), ". The community number is the one that ranks the record.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow",
    style: {
      display: 'block',
      marginBottom: 2
    }
  }, "You"), cleared ? /*#__PURE__*/React.createElement("span", {
    className: "ts-body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Score cleared") : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 32
    }
  }, mine.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, delta > 0 ? `${delta} above the room` : delta < 0 ? `${Math.abs(delta)} below the room` : 'level with the room'))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    onClick: () => setOpen(true)
  }, cleared ? 'Score it' : 'Change')), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: () => setOpen(false),
    title: "Your score",
    footer: /*#__PURE__*/React.createElement(Button, {
      style: {
        width: '100%'
      },
      onClick: () => setOpen(false)
    }, "Save score")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      paddingBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ScoreDial, {
    value: cleared ? 0 : mine,
    onChange: onMine,
    size: 196,
    state: cleared ? 'cleared' : undefined,
    onReset: onReset,
    onUndo: onUndo
  }))));
}

/* Proposal B — yours shouts, the room is the context. The dial is the gesture the product is
   built on, so it keeps the weight; the room becomes a line with a scale under it, which is the
   one thing neither version shows today: where your number sits against everybody else's. */
function ScoreBlockB({
  mine,
  onMine,
  cleared,
  onReset,
  onUndo
}) {
  const a = TS.album;
  const room = Number(a.room);
  const pct = v => `${v / 10 * 100}%`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "You"), /*#__PURE__*/React.createElement(ScoreDial, {
    value: cleared ? 0 : mine,
    onChange: onMine,
    size: 172,
    state: cleared ? 'cleared' : undefined,
    onReset: onReset,
    onUndo: onUndo
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CertifiedSeal, {
    state: "certified",
    score: a.room,
    ratings: a.ratings,
    size: 54,
    compact: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow",
    style: {
      display: 'block'
    }
  }, "The room"), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, a.room, " from ", a.ratings.toLowerCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 26,
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 12px 0',
      height: 2,
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 12,
      height: 2,
      width: pct(room),
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 7,
      left: pct(room),
      width: 2,
      height: 12,
      background: 'var(--text-secondary)',
      transform: 'translateX(-1px)'
    }
  }), !cleared ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 4,
      left: pct(mine),
      transform: 'translateX(-50%)',
      display: 'grid',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-caption-bold",
    style: {
      color: 'var(--accent-score)'
    }
  }, mine.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 10,
      background: 'var(--accent-default)'
    }
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "0"), /*#__PURE__*/React.createElement("span", null, "10"))));
}
function TrackRow({
  n,
  title,
  duration
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      width: 16,
      color: 'var(--text-muted)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline",
    style: {
      minWidth: 0,
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)'
    }
  }, duration || '—'), /*#__PURE__*/React.createElement("button", {
    "aria-label": `Play ${title}`,
    className: "press tappable",
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--accent-default)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 16
  })));
}
function AlbumScreen({
  go,
  block = 'theirs'
}) {
  const a = TS.album;
  const [tab, setTab] = React.useState('reviews');
  const [mine, setMine] = React.useState(a.mine);
  const [cleared, setCleared] = React.useState(false);
  const [compose, setCompose] = React.useState(false);
  const [draft, setDraft] = React.useState('');
  const score = {
    mine,
    onMine: v => {
      setMine(v);
      setCleared(false);
    },
    cleared,
    onReset: () => setCleared(true),
    onUndo: () => setCleared(false)
  };
  const Block = block === 'a' ? ScoreBlockA : block === 'b' ? ScoreBlockB : ScoreBlockTheirs;
  const centred = block === 'theirs';
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: centred ? 'center' : 'start',
      textAlign: centred ? 'center' : 'start'
    }
  }, /*#__PURE__*/React.createElement(Art, {
    src: a.art,
    alt: a.title,
    size: 188,
    radius: "var(--corner-cover)"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "ts-title",
    style: {
      margin: 'var(--space-4) 0 0'
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-bold",
    style: {
      color: 'var(--accent-default)'
    }
  }, a.artist), /*#__PURE__*/React.createElement("div", {
    className: "ts-caption",
    style: {
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, a.genre, " \xA0\u2022\xA0 ", a.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--tap-gap)',
      justifyContent: centred ? 'center' : 'flex-start',
      flexWrap: 'wrap',
      margin: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "comment",
    onClick: () => setCompose(true)
  }, "Review"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Add to"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Play")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Block, score)), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [['reviews', 'Reviews'], ['tracklist', 'Tracklist']]
  }), tab === 'reviews' ? /*#__PURE__*/React.createElement("div", null, a.reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.person,
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: i < a.reviews.length - 1 ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement(ReviewCard, _extends({}, r, {
    record: undefined,
    onMore: () => {}
  }))))) : /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-3) 0 0',
      padding: 0
    }
  }, a.tracks.map((t, i) => /*#__PURE__*/React.createElement(TrackRow, {
    key: t.title,
    n: i + 1,
    title: t.title,
    duration: t.duration
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: compose,
    onClose: () => setCompose(false),
    title: `Review ${a.title}`,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--tap-gap)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      style: {
        width: '100%'
      },
      onClick: () => setCompose(false)
    }, "Publish review"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setCompose(false),
      className: "press tappable",
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontWeight: 400,
        fontSize: 13
      }
    }, "Keep the draft and close"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ScoreDial, {
    value: cleared ? 0 : mine,
    onChange: score.onMine,
    size: 180,
    state: cleared ? 'cleared' : undefined,
    onReset: score.onReset,
    onUndo: score.onUndo
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 4,
    placeholder: "Write it the way you would say it out loud.",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'none',
      padding: 12,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-hairline)',
      background: 'var(--bg-shade)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: '22px'
    }
  }))));
}
Object.assign(window, {
  AlbumScreen,
  ScoreBlockTheirs,
  ScoreBlockA,
  ScoreBlockB
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-album.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-episode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Episode — build order #1. The stage stays dark in both themes; everything below it is the
   light page. One motion moment, and on mobile it is the score dial. */

/* Desktop-only backdrop: album sleeves drifting behind the stage. Built from Apple artwork,
   which sends Access-Control-Allow-Origin:*; episode stills from Linktree do not, so they can
   never be textures. This CSS version is also the fallback if the three.js upgrade fails to load. */
function SleeveWall() {
  const covers = TS.tracklist.map(t => t.art);
  return /*#__PURE__*/React.createElement("div", {
    className: "enhanced-3d",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      opacity: .28,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-12% -6%',
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 18,
      transform: 'rotate(-9deg) scale(1.15)',
      animation: 'ts-drift 46s linear infinite'
    }
  }, covers.concat(covers).map((src, i) => /*#__PURE__*/React.createElement(Art, {
    key: i,
    src: src,
    style: {
      objectFit: 'cover',
      filter: 'saturate(.8) brightness(.7)'
    }
  }))));
}

/* A readout, not a control: this is what the guest named on air, not something you set.
   So the pips stay 24px and nothing here is tappable — the tracklist below is the input,
   and it clears 44. status/guessed is a filled pip; missed is a one-pixel orange ring,
   never filled, because ten filled orange pips would out-shout the score. */
function Scoreboard({
  tracks
}) {
  const got = tracks.filter(t => t.guessed).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow"
  }, "Named on air"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    },
    role: "img",
    "aria-label": `${got} of ${tracks.length} named on air`
  }, tracks.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s.t,
    title: `${s.t} — ${s.guessed ? 'named' : 'missed'}`,
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 11,
      background: s.guessed ? 'var(--status-guessed)' : 'transparent',
      color: s.guessed ? '#fff' : 'var(--status-missed)',
      boxShadow: s.guessed ? 'none' : 'inset 0 0 0 1px var(--status-missed)'
    }
  }, i + 1))), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      color: 'var(--text-primary)',
      fontSize: 24
    }
  }, got, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "/", tracks.length)));
}
function TrackRow({
  track,
  i,
  onOpen,
  draft
}) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(i),
    className: "press",
    style: {
      width: '100%',
      minHeight: 'var(--tap-min)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      border: 0,
      borderBottom: '1px solid var(--border-hairline)',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      width: 18,
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, i + 1), /*#__PURE__*/React.createElement(Art, {
    src: track.art,
    alt: track.t,
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline",
    style: {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, track.t), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      display: 'block',
      color: 'var(--text-secondary)'
    }
  }, track.a, draft ? ' · draft kept' : '')), track.guessed ? /*#__PURE__*/React.createElement(Icon, {
    name: "seal",
    size: 14,
    style: {
      color: 'var(--status-guessed)',
      flex: '0 0 auto'
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 22,
      flex: '0 0 auto',
      color: track.score ? 'var(--accent-score)' : 'var(--text-muted)'
    }
  }, track.score || '–')));
}

/* One save at the end, drafts preserved. Today the score autosaves while the review text needs
   a manual save, which is how people lose what they wrote — this is the fix, in the design. */
function ScoreModal({
  open,
  onClose,
  track,
  draft,
  setDraft,
  onSave
}) {
  if (!track) return null;
  const d = draft || {
    score: null,
    text: '',
    standout: false
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "Score the record",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--tap-gap)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onSave,
      style: {
        width: '100%'
      }
    }, "Save score and review"), /*#__PURE__*/React.createElement("p", {
      className: "ts-caption",
      style: {
        margin: 0,
        textAlign: 'center',
        color: 'var(--text-muted)'
      }
    }, "Close this and your draft is kept."))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Art, {
    src: track.art,
    alt: track.t,
    size: 52
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    className: "ts-subheadline-bold",
    style: {
      display: 'block'
    }
  }, track.t), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, track.a))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-2) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ScoreDial, {
    value: d.score,
    size: 210,
    onChange: v => setDraft({
      ...d,
      score: v
    })
  })), /*#__PURE__*/React.createElement("label", {
    className: "ts-footnote",
    style: {
      display: 'block',
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, "Your review"), /*#__PURE__*/React.createElement("textarea", {
    value: d.text,
    onChange: e => setDraft({
      ...d,
      text: e.target.value
    }),
    rows: 4,
    placeholder: "What does this record do that nothing else does?",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'none',
      padding: 12,
      borderRadius: 'var(--radius-lg)',
      border: 'var(--card-border)',
      background: 'var(--bg-shade)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: '22px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDraft({
      ...d,
      standout: !d.standout
    }),
    className: "press tappable",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      marginTop: 'var(--space-3)',
      padding: '10px 12px',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      border: 'var(--card-border)',
      background: d.standout ? 'var(--bg-selected)' : 'transparent',
      color: 'var(--text-primary)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 18,
    style: {
      color: d.standout ? 'var(--accent-default)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline"
  }, "Mark as a standout track")));
}
function EpisodeScreen({
  go,
  onPlus
}) {
  const e = TS.episode;
  const wide = useWide();
  const [tracks, setTracks] = React.useState(TS.tracklist);
  const [active, setActive] = React.useState(0);
  const [scoring, setScoring] = React.useState(null); // index or null
  const [drafts, setDrafts] = React.useState({}); // survives closing the modal
  const [cinema, setCinema] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const open = i => {
    setActive(i);
    setScoring(i);
  };
  const save = () => {
    const d = drafts[scoring];
    if (d && d.score != null) {
      setTracks(t => t.map((x, i) => i === scoring ? {
        ...x,
        score: d.score.toFixed(1)
      } : x));
    }
    setScoring(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  };
  const meta = [e.date, e.duration].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    "data-surface": "stage",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SleeveWall, null), /*#__PURE__*/React.createElement("div", {
    className: "media-scrim",
    style: {
      position: 'relative',
      aspectRatio: wide ? '21 / 9' : '16 / 9',
      maxHeight: wide ? 520 : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      gap: 10,
      alignContent: 'center',
      background: 'linear-gradient(150deg,var(--ink-700),var(--ink-900))'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "disc",
    size: wide ? 54 : 40,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow",
    style: {
      color: 'var(--text-muted)'
    }
  }, e.videoId ? 'Episode still' : 'Still only')), /*#__PURE__*/React.createElement("img", {
    src: e.still,
    alt: "",
    onError: e2 => {
      e2.currentTarget.style.display = 'none';
    },
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: 'var(--gutter)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Chyron, {
    size: wide ? 'hero' : 'card',
    kicker: e.kicker,
    name: e.guest
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCinema(true),
    className: "press tappable",
    "aria-label": e.videoId ? 'Play the episode' : 'Still only',
    style: {
      marginInlineStart: 'auto',
      flex: '0 0 auto',
      width: 54,
      height: 54,
      borderRadius: 'var(--corner-pill)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      background: e.videoId ? 'var(--accent-default)' : 'var(--bg-on-media)',
      color: e.videoId ? 'var(--text-on-accent)' : 'var(--text-on-media)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: e.videoId ? 'play' : 'disc',
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-5)',
      paddingBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ts-supertitle",
    style: {
      margin: 0,
      maxWidth: '22ch'
    }
  }, e.title), meta.length ? /*#__PURE__*/React.createElement("p", {
    className: "ts-footnote",
    style: {
      margin: '10px 0 0',
      color: 'var(--text-secondary)'
    }
  }, e.kicker, " \xB7 ", meta.join(' · ')) : /*#__PURE__*/React.createElement("p", {
    className: "ts-footnote",
    style: {
      margin: '10px 0 0',
      color: 'var(--text-secondary)'
    }
  }, e.kicker), /*#__PURE__*/React.createElement("p", {
    className: "ts-body",
    style: {
      margin: 'var(--space-4) 0 0',
      color: 'var(--text-secondary)',
      maxWidth: '42ch'
    }
  }, e.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-5) 0',
      padding: 'var(--space-4) 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Scoreboard, {
    tracks: tracks
  })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "The ten songs",
    lead: "Tap a record to score it. Your draft is kept if you close the modal."
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, tracks.map((t, i) => /*#__PURE__*/React.createElement(TrackRow, {
    key: t.t,
    track: t,
    i: i,
    onOpen: open,
    draft: drafts[i] && (drafts[i].text || drafts[i].score != null)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--pad-section)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What the room said",
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "small",
      onClick: onPlus
    }, "Write one")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      gridTemplateColumns: wide ? 'repeat(3,minmax(0,1fr))' : '1fr',
      alignItems: 'start'
    }
  }, TS.reviews.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.person,
    kind: r.body ? 'review' : 'quick'
  }, r, {
    record: tracks[i].t,
    artist: tracks[i].a,
    art: tracks[i].art
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--pad-section)'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "More from the archive",
    lead: "Most of the archive has no date, no duration and no video. The cards say so."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rail",
    style: {
      paddingBottom: 'var(--space-5)'
    }
  }, TS.more.map(m => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: m.title,
    size: "small"
  }, m)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 'auto 0 0 0',
      zIndex: 15,
      padding: 'var(--space-3) var(--gutter) var(--space-3)',
      background: 'linear-gradient(to top, var(--bg-page) 40%, transparent)',
      display: wide ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => open(active),
    style: {
      width: '100%',
      background: 'var(--bg-card)'
    }
  }, saved ? 'Saved' : 'Score the episode')), /*#__PURE__*/React.createElement(ScoreModal, {
    open: scoring != null,
    onClose: () => setScoring(null),
    track: scoring != null ? tracks[scoring] : null,
    draft: drafts[scoring],
    setDraft: d => setDrafts(p => ({
      ...p,
      [scoring]: d
    })),
    onSave: save
  }), cinema ? /*#__PURE__*/React.createElement("div", {
    "data-surface": "stage",
    onClick: () => setCinema(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--gutter)',
      background: 'rgba(5,5,6,.94)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(1100px,100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-scrim",
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      borderRadius: 'var(--corner-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: e.still,
    alt: "",
    onError: ev => {
      ev.currentTarget.style.display = 'none';
    },
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Chyron, {
    size: "card",
    kicker: e.kicker,
    name: e.guest
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)',
      maxWidth: '40ch'
    }
  }, e.videoId ? 'Embeds need a real origin, so this opens on YouTube.' : 'Still only — this episode has no verified video.'), e.videoId ? /*#__PURE__*/React.createElement(Button, {
    icon: "external",
    href: `https://www.youtube.com/watch?v=${e.videoId}`,
    style: {
      marginInlineStart: 'auto'
    }
  }, "Watch on YouTube") : null))) : null);
}
window.EpisodeScreen = EpisodeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-episode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-feed.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Feed — Level 1 structure, Level 2 skin. Tabs are their labels verbatim: All reviews · Featured ·
   Following. Rows are separated by a hairline in light and by elevation in dark, which is the
   theming rule, not a per-screen choice. */
function FeedScreen({
  go,
  onPlus
}) {
  const [tab, setTab] = React.useState('all-reviews');
  const [loading, setLoading] = React.useState(false);
  const wide = useWide();
  const rows = TS.feed[tab] || [];

  /* One tab change fetches, so the skeleton is the shape of a review card, not a spinner. */
  const pick = t => {
    if (t === tab) return;
    setTab(t);
    setLoading(true);
    setTimeout(() => setLoading(false), 420);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: pick,
    items: [['all-reviews', 'All reviews'], ['featured', 'Featured'], ['following', 'Following']]
  }), tab === 'featured' ? /*#__PURE__*/React.createElement("p", {
    className: "ts-caption",
    style: {
      margin: 'var(--space-3) 0 0',
      color: 'var(--text-secondary)'
    }
  }, "Picked by moderators.") : null, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-4)'
    }
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    h: 34,
    w: 34,
    r: "50%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: 66,
    w: 200,
    r: "var(--corner-cover)"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: 16,
    w: "94%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    h: 16,
    w: "72%"
  })))) : rows.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: wide ? 'grid' : 'block',
      gridTemplateColumns: wide ? 'repeat(2,minmax(0,1fr))' : undefined,
      gap: wide ? 'var(--space-6)' : undefined,
      alignItems: 'start'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.person + i,
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: i < rows.length - 1 ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement(ReviewCard, _extends({}, r, {
    art: r.art,
    onMore: () => {}
  })), r.record ? /*#__PURE__*/React.createElement("button", {
    onClick: () => go('album'),
    className: "press",
    style: {
      marginTop: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Open the record ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 15
  })) : null))) : /*#__PURE__*/React.createElement(Empty, {
    line: "Nobody you follow has posted yet. Go first \u2014 one record, one score.",
    cta: "Write a review",
    onCta: onPlus
  }));
}
window.FeedScreen = FeedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-hundred.jsx
try { (() => {
/* The Trackstar 100 — Level 1 structure: title, Created by Jack Coyne, description, the counter
   row, then the numbered list. The numbering is part of the identity, so it is never a bullet and
   never hidden on small screens. Top three carry the orange; the rest are neutral, so the eye
   lands on the podium and not on ninety-seven identical numerals. */
function HundredScreen({
  go
}) {
  const h = TS.hundred;
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ts-supertitle",
    style: {
      margin: 0
    }
  }, h.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Created by"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--bg-well)',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    className: "ts-footnote",
    style: {
      fontWeight: 500
    }
  }, h.by)), /*#__PURE__*/React.createElement("p", {
    className: "ts-body",
    style: {
      margin: 'var(--space-3) 0 0',
      maxWidth: '44ch',
      color: 'var(--text-secondary)'
    }
  }, h.desc, ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--accent-default)',
      textDecoration: 'underline'
    }
  }, h.link)), /*#__PURE__*/React.createElement(Counters, {
    items: h.counters,
    style: {
      marginTop: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-5) 0 0',
      padding: 0
    }
  }, h.rows.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: r.album
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('album'),
    className: "press",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      padding: 'var(--space-3) 0',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-hairline)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      flex: '0 0 auto',
      textAlign: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-.03em',
      color: i < 3 ? 'var(--accent-default)' : 'var(--text-muted)'
    }
  }, i + 1), /*#__PURE__*/React.createElement(Art, {
    src: r.art,
    alt: r.album,
    size: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ts-subheadline-bold",
    style: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.album), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, r.artist)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      display: 'block',
      fontSize: 26
    }
  }, r.score), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-muted)'
    }
  }, r.ratings)))))), /*#__PURE__*/React.createElement("p", {
    className: "ts-caption",
    style: {
      margin: 'var(--space-4) 0 0',
      color: 'var(--text-muted)'
    }
  }, "Eight of a hundred shown."));
}
window.HundredScreen = HundredScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-hundred.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-lists.jsx
try { (() => {
/* Lists — Level 1 structure: the tabs are All lists · Featured · Following, verbatim, and a row is
   title, "Created by <person>", description, then the covers. Featured is curated by moderators.
   The create flow opens from the surface you are creating from, Instagram-style: pick what you are making,
   one screen per step, one save at the end, and the draft survives a close. */

function ListRow({
  list,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    className: "press",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ts-title",
    style: {
      display: 'block'
    }
  }, list.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Created by"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--bg-well)',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    className: "ts-footnote",
    style: {
      fontWeight: 500
    }
  }, list.by)), /*#__PURE__*/React.createElement("p", {
    className: "ts-body",
    style: {
      margin: 'var(--space-2) 0 0',
      color: 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, list.desc), list.note ? /*#__PURE__*/React.createElement("span", {
    className: "ts-caption-bold",
    style: {
      display: 'inline-block',
      marginTop: 8,
      color: 'var(--accent-default)'
    }
  }, list.note) : null, /*#__PURE__*/React.createElement("div", {
    className: "rail",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, list.covers.map((c, i) => /*#__PURE__*/React.createElement(Art, {
    key: i,
    src: c.art,
    size: 96,
    radius: "var(--corner-card)"
  }))));
}
function CreateFlow({
  open,
  onClose
}) {
  const [step, setStep] = React.useState('pick');
  const [draft, setDraft] = React.useState({
    kind: null,
    name: '',
    note: '',
    score: 0,
    picks: []
  });
  React.useEffect(() => {
    if (open) setStep(draft.kind ? 'build' : 'pick');
  }, [open]);
  const toggle = t => setDraft(d => ({
    ...d,
    picks: d.picks.includes(t) ? d.picks.filter(x => x !== t) : [...d.picks, t]
  }));
  const pick = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      paddingBottom: 'var(--space-4)'
    }
  }, [['review', 'comment', 'A review', 'One record, one score, and what it does that nothing else does.'], ['list', 'list', 'A list', 'A crate of records with a title worth arguing about.']].map(([k, icon, title, lead]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setDraft(d => ({
        ...d,
        kind: k
      }));
      setStep('build');
    },
    className: "press",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      textAlign: 'left',
      padding: 'var(--pad-card)',
      borderRadius: 'var(--corner-card)',
      border: '1px solid var(--border-hairline)',
      background: 'var(--bg-card)',
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    style: {
      color: 'var(--accent-default)',
      flex: '0 0 auto',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    className: "ts-subheadline-bold",
    style: {
      display: 'block'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, lead)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 18,
    style: {
      marginInlineStart: 'auto',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }))));
  const build = /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "ts-footnote",
    style: {
      display: 'block',
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, draft.kind === 'list' ? 'List title' : 'Which record?'), /*#__PURE__*/React.createElement("input", {
    value: draft.name,
    onChange: e => setDraft(d => ({
      ...d,
      name: e.target.value
    })),
    placeholder: draft.kind === 'list' ? 'Records that open with a drum break' : 'Search Albums, Artists...',
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 'var(--tap-min)',
      padding: '12px 14px',
      borderRadius: 'var(--corner-pill)',
      border: 0,
      background: 'var(--bg-well)',
      color: 'var(--text-primary)',
      fontWeight: 400
    }
  }), draft.kind === 'review' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      margin: 'var(--space-4) 0'
    }
  }, /*#__PURE__*/React.createElement(ScoreDial, {
    value: draft.score,
    onChange: v => setDraft(d => ({
      ...d,
      score: v
    })),
    size: 168,
    onReset: draft.score ? () => setDraft(d => ({
      ...d,
      score: 0
    })) : undefined
  })) : null, /*#__PURE__*/React.createElement("label", {
    className: "ts-footnote",
    style: {
      display: 'block',
      color: 'var(--text-secondary)',
      margin: 'var(--space-4) 0 6px'
    }
  }, draft.kind === 'list' ? 'Add records' : 'Your review'), draft.kind === 'list' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(84px,1fr))',
      gap: 8
    }
  }, TS.tracklist.slice(0, 8).map(t => {
    const on = draft.picks.includes(t.t);
    return /*#__PURE__*/React.createElement("button", {
      key: t.t,
      onClick: () => toggle(t.t),
      className: "press",
      "aria-pressed": on,
      style: {
        position: 'relative',
        border: 0,
        background: 'var(--bg-well)',
        padding: 0,
        cursor: 'pointer',
        borderRadius: 'var(--corner-cover)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Art, {
      src: t.art,
      alt: t.t,
      radius: "0",
      style: {
        opacity: on ? 1 : .58
      }
    }), on ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        right: 5,
        top: 5,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: 'var(--accent-default)',
        color: 'var(--text-on-accent)',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "seal",
      size: 13
    })) : null);
  })) : /*#__PURE__*/React.createElement("textarea", {
    value: draft.note,
    onChange: e => setDraft(d => ({
      ...d,
      note: e.target.value
    })),
    rows: 4,
    placeholder: "Write it the way you would say it out loud.",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'none',
      padding: 12,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-hairline)',
      background: 'var(--bg-shade)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: '22px'
    }
  }));
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: step === 'pick' ? 'Create' : draft.kind === 'list' ? 'New list' : 'New review',
    footer: step === 'build' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 'var(--tap-gap)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onClose,
      style: {
        width: '100%'
      }
    }, draft.kind === 'list' ? `Publish list${draft.picks.length ? ` · ${draft.picks.length}` : ''}` : 'Publish review'), /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep('pick'),
      className: "press tappable",
      style: {
        border: 0,
        background: 'transparent',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontWeight: 400,
        fontSize: 13
      }
    }, "Back")) : null
  }, step === 'pick' ? pick : build);
}
function ListsScreen({
  go,
  onPlus
}) {
  const [tab, setTab] = React.useState('all-lists');
  const wide = useWide();
  const rows = TS.lists[tab] || [];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [['all-lists', 'All lists'], ['featured', 'Featured'], ['following', 'Following']]
  }), rows.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: wide ? 'grid' : 'block',
      gridTemplateColumns: wide ? 'repeat(2,minmax(0,1fr))' : undefined,
      gap: wide ? 'var(--space-6)' : undefined,
      alignItems: 'start'
    }
  }, rows.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      borderBottom: i < rows.length - 1 && !wide ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    list: l,
    onOpen: () => go && go(l.name === 'The Trackstar 100' ? 'hundred' : 'album')
  })))) : /*#__PURE__*/React.createElement(Empty, {
    line: "Nobody you follow has built a list yet. Go first.",
    cta: "Start a list",
    onCta: onPlus
  }));
}
Object.assign(window, {
  ListsScreen,
  CreateFlow,
  ListRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-lists.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/screen-profile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Profile — Level 1 anatomy, matched in order: avatar, name, @handle, bio, location, the counter
   row, then the tabs. Top 5 and Current rotation live inside the Lists tab, where their screens
   put them, five slots each with a + on the empty ones — and only there, so the heading appears
   once. Creator and viewer are two versions of the screen, not one screen with the button
   swapped: the viewer has no Saved tab, because saved is private, and no + on the slot rails. */
function Avatar({
  name,
  size = 88
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--bg-well)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: size * 0.3,
      letterSpacing: '-.02em',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
    }
  }, initials);
}
function MetaLine({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-footnote",
    style: {
      textDecoration: icon === 'external' ? 'underline' : 'none'
    }
  }, children));
}
function ProfileScreen({
  who = 'me',
  initialTab = 'reviews',
  onPlus
}) {
  const viewer = who !== 'me';
  const p = viewer ? TS.other : TS.me;
  const [tab, setTab] = React.useState(initialTab);
  const [following, setFollowing] = React.useState(false);
  const tabs = viewer ? [['reviews', 'Reviews'], ['lists', 'Lists']] : [['reviews', 'Reviews'], ['lists', 'Lists'], ['saved', 'Saved']];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ts-title",
    style: {
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, p.handle)), viewer ? following ? /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: () => setFollowing(false)
  }, "Unfollow") : /*#__PURE__*/React.createElement(Button, {
    onClick: () => setFollowing(true)
  }, "Follow") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Edit")), /*#__PURE__*/React.createElement("p", {
    className: "ts-body",
    style: {
      margin: 'var(--space-3) 0 0',
      maxWidth: '40ch'
    }
  }, p.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    icon: "pin"
  }, p.location), /*#__PURE__*/React.createElement(MetaLine, {
    icon: "external"
  }, p.link)), /*#__PURE__*/React.createElement(Counters, {
    items: p.counters,
    style: {
      marginTop: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: tabs
  })), tab === 'reviews' ? /*#__PURE__*/React.createElement("div", null, (viewer ? TS.feed.following : TS.feed['all-reviews']).map((r, i, a) => /*#__PURE__*/React.createElement("div", {
    key: r.person + i,
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: i < a.length - 1 ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement(ReviewCard, _extends({}, r, {
    person: p.name,
    onMore: () => {}
  }))))) : null, tab === 'lists' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SlotRail, {
    title: "Top 5",
    pinned: true,
    covers: p.top5,
    onAdd: onPlus,
    editable: !viewer
  }), /*#__PURE__*/React.createElement(SlotRail, {
    title: "Current rotation",
    pinned: true,
    covers: p.rotation,
    onAdd: onPlus,
    editable: !viewer
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, TS.lists['all-lists'].slice(0, 2).map((l, i, a) => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      padding: 'var(--space-4) 0',
      borderBottom: i < a.length - 1 ? '1px solid var(--border-hairline)' : 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    className: "ts-subheadline-bold",
    style: {
      display: 'block'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    className: "ts-caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, l.covers.length, " records"))))) : null, tab === 'saved' ? /*#__PURE__*/React.createElement(Empty, {
    line: "Nothing saved yet. Save a list and it waits for you here.",
    cta: "Browse lists",
    onCta: onPlus
  }) : null);
}
window.ProfileScreen = ProfileScreen;
window.ProfileAvatar = Avatar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/screen-profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-app/shell.jsx
try { (() => {
/* Shell — Level 1 navigation, matched exactly to the client's screens: a persistent header on
   every screen with the back chevron left, the search bar centre and the hamburger right. The
   search bar is the engine of the product, so it never collapses to an icon.
   Their IA has no bottom tab bar, so neither does this — and production has no floating action
   button either, so screen-to-screen navigation lives in the hamburger, which is theirs, and
   creating opens from the surface you are creating from.
   Level 2 is everything you can see: colour, type, 44px targets, modals, skeletons, empty states. */
const DS = window.TrackStarDesignSystem_75f3a7;
const {
  Button,
  Icon,
  Tabs,
  SearchBar,
  Chyron,
  CertifiedSeal,
  ScoreDial,
  EpisodeCard,
  ReviewCard
} = DS;
function useMedia(q) {
  const [m, setM] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q),
      h = () => setM(mq.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [q]);
  return m;
}
const useWide = () => useMedia('(min-width:1024px)');

/* Header. `home` swaps the back chevron for the mark, the way their feed does. */
function AppBar({
  home,
  onBack,
  onMenu,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "appbar"
  }, home ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": "Track Star",
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: 'var(--tap-min)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-trackstar.svg",
    alt: "Track Star",
    style: {
      height: 26,
      width: 'auto'
    }
  })) : /*#__PURE__*/React.createElement("button", {
    className: "press tappable",
    onClick: onBack,
    "aria-label": "Back",
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--accent-default)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      marginInlineStart: -10,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 24,
    style: {
      transform: 'rotate(180deg)'
    }
  })), /*#__PURE__*/React.createElement(SearchBar, {
    readOnly: true,
    onClick: onSearch
  }), /*#__PURE__*/React.createElement("button", {
    className: "press tappable",
    onClick: onMenu,
    "aria-label": "Menu",
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--accent-default)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      marginInlineEnd: -8,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 24
  })));
}

/* One presentation at every width: a centred modal on the native <dialog> element. ADR 0006's
   2026-08-18 amendment retired the mobile sheet — after three rounds of real-device keyboard work
   it fought the phone viewport, and the centred modal serves every width. So there is no grabber,
   no touch physics and no responsive switch. Esc and the close button both run onClose, and draft
   preservation stays the caller's job and is still required: closing never discards text. */
function Modal({
  open,
  onClose,
  title,
  children,
  footer
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      if (d.showModal) d.showModal();else d.setAttribute('open', '');
    } else if (!open && d.open) d.close();
  }, [open]);
  return /*#__PURE__*/React.createElement("dialog", {
    className: "modal",
    ref: ref,
    "aria-label": title,
    onCancel: e => {
      e.preventDefault();
      onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 var(--gutter) var(--space-3)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ts-title",
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "press tappable",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      marginInlineStart: 'auto',
      border: 0,
      background: 'transparent',
      color: 'var(--text-secondary)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      overscrollBehavior: 'contain',
      padding: '0 var(--gutter)',
      minHeight: 0
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--gutter) 0',
      flex: '0 0 auto'
    }
  }, footer) : null));
}

/* The hamburger is theirs; what is inside it is ours. Screens, then the theme switch —
   light and dark are peers, and auto is the default because the phone already knows. */
function MenuModal({
  open,
  onClose,
  route,
  go,
  theme,
  setTheme
}) {
  const items = [['feed', 'All reviews', 'comment'], ['album', 'Album', 'disc'], ['lists', 'Lists', 'list'], ['hundred', 'The Trackstar 100', 'seal'], ['profile', 'Your profile', 'bookmark'], ['episode', 'Episode · proposal', 'headphones']];
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "Menu"
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      paddingBottom: 'var(--space-4)'
    }
  }, items.map(([k, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      go(k);
      onClose();
    },
    className: "press",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minHeight: 52,
      border: 0,
      cursor: 'pointer',
      background: 'transparent',
      padding: 0,
      textAlign: 'left',
      color: route === k ? 'var(--accent-default)' : 'var(--text-primary)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-body",
    style: {
      fontWeight: route === k ? 600 : 400
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 18,
    style: {
      marginInlineStart: 'auto',
      color: 'var(--text-muted)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Appearance"), /*#__PURE__*/React.createElement(Tabs, {
    value: theme,
    onChange: setTheme,
    items: [['auto', 'Auto'], ['light', 'Light'], ['dark', 'Dark']]
  }), /*#__PURE__*/React.createElement("p", {
    className: "ts-caption",
    style: {
      margin: '8px 0 0',
      color: 'var(--text-muted)'
    }
  }, "Auto follows your phone. The stage stays dark either way.")));
}

/* Artwork. One component, one name, shared with the web kit: null or a failed load lands on the
   disc glyph, which is the documented missing-artwork mark. Never a broken image, and never a
   grey box pretending to be a picture. Omit `size` and it fills its cell as a square. */
function Art({
  src,
  alt = '',
  size,
  radius = 'var(--corner-cover)',
  style
}) {
  const [bad, setBad] = React.useState(false);
  React.useEffect(() => setBad(false), [src]);
  const box = size ? {
    width: size,
    height: size,
    borderRadius: radius,
    flex: '0 0 auto',
    ...style
  } : {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius,
    ...style
  };
  if (!src || bad) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-label": alt ? `${alt} — no artwork` : 'No artwork',
      style: {
        ...box,
        background: 'var(--bg-well)',
        display: 'grid',
        placeItems: 'center',
        boxShadow: 'inset 0 0 0 1px var(--border-hairline)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "disc",
      size: size ? Math.max(14, size * 0.3) : 30
    }));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    onError: () => setBad(true),
    style: {
      ...box,
      objectFit: 'cover',
      background: 'var(--bg-well)'
    }
  });
}

/* Their counter row: the number in Primary, the label under it in Secondary. */
function Counters({
  items,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      ...style
    }
  }, items.map(([n, label]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-body-bold",
    style: {
      letterSpacing: '-.03em'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "ts-footnote",
    style: {
      color: 'var(--text-secondary)'
    }
  }, label))));
}

/* Top 5 and Current rotation: a row of five slots, + on the empty ones, and it scrolls past the
   gutter so the fifth slot tells you there is more. */
function SlotRail({
  title,
  pinned,
  covers = [],
  slots = 5,
  onAdd,
  editable = true
}) {
  const filled = covers.slice(0, slots);
  const empty = Math.max(0, slots - filled.length);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ts-title",
    style: {
      margin: 0
    }
  }, title), pinned ? /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 17,
    style: {
      color: 'var(--accent-default)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, editable ? /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": `Add to ${title}`,
    className: "press",
    style: {
      width: 86,
      height: 86,
      borderRadius: 'var(--corner-card)',
      cursor: 'pointer',
      border: '1px dashed var(--border-strong)',
      background: 'var(--bg-shade)',
      color: 'var(--text-secondary)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22
  })) : null, filled.map((c, i) => /*#__PURE__*/React.createElement(Art, {
    key: i,
    src: c.art,
    alt: c.title,
    size: 86,
    radius: "var(--corner-cover)"
  })), Array.from({
    length: empty
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      width: 86,
      height: 86,
      borderRadius: 'var(--corner-card)',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
    }
  }))));
}
function SectionHead({
  title,
  lead,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ts-title",
    style: {
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "ts-footnote",
    style: {
      margin: '4px 0 0',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, lead) : null), aside ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto',
      flex: '0 0 auto'
    }
  }, aside) : null);
}

/* Loading is a skeleton the shape of the content, never a spinner on a blank page. */
function Skeleton({
  h = 14,
  w = '100%',
  r = 'var(--radius-sm)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      width: w,
      borderRadius: r,
      background: 'var(--bg-shade)'
    }
  });
}
/* Empty is an invitation, not a status message. */
function Empty({
  line,
  cta,
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) 0',
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ts-body",
    style: {
      margin: 0,
      maxWidth: '34ch',
      color: 'var(--text-secondary)'
    }
  }, line), cta ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCta
  }, cta) : null);
}

/* Level tag, for the comparison pages. Nobody should have to guess which version they are
   looking at, so the label sits on the frame, not in a caption somewhere else. */
function LevelTag({
  level,
  children
}) {
  const tone = level === 1 ? 'var(--text-secondary)' : 'var(--accent-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-on-accent)',
      background: tone,
      padding: '3px 7px',
      borderRadius: 3
    }
  }, "Level ", level), /*#__PURE__*/React.createElement("span", {
    className: "ts-subheadline-bold",
    style: {
      color: 'var(--text-primary)'
    }
  }, children));
}
Object.assign(window, {
  useMedia,
  useWide,
  AppBar,
  MenuModal,
  Modal,
  Art,
  Counters,
  SlotRail,
  SectionHead,
  Skeleton,
  Empty,
  LevelTag,
  Button,
  Icon,
  Tabs,
  SearchBar,
  Chyron,
  CertifiedSeal,
  ScoreDial,
  EpisodeCard,
  ReviewCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-app/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/app-artist.jsx
try { (() => {
function App() {
  const [route, setRoute] = React.useState('artist');
  const [signedIn, setSignedIn] = React.useState(false);
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-stage)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go,
    signedIn: signedIn,
    onSignIn: () => {
      setSignedIn(true);
      go('profile');
    }
  }), route === 'episode' ? /*#__PURE__*/React.createElement(EpisodeScreen, {
    go: go
  }) : null, route === 'artist' ? /*#__PURE__*/React.createElement(ArtistScreen, {
    go: go
  }) : null, route === 'album' ? /*#__PURE__*/React.createElement(AlbumScreen, {
    go: go
  }) : null, route === 'profile' ? /*#__PURE__*/React.createElement(ProfileScreen, null) : null, /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/app-artist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/app.jsx
try { (() => {
function App() {
  const [route, setRoute] = React.useState('episode');
  const [signedIn, setSignedIn] = React.useState(false);
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-stage)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go,
    signedIn: signedIn,
    onSignIn: () => {
      setSignedIn(true);
      go('profile');
    }
  }), route === 'episode' ? /*#__PURE__*/React.createElement(EpisodeScreen, {
    go: go
  }) : null, route === 'artist' ? /*#__PURE__*/React.createElement(ArtistScreen, {
    go: go
  }) : null, route === 'album' ? /*#__PURE__*/React.createElement(AlbumScreen, {
    go: go
  }) : null, route === 'profile' ? /*#__PURE__*/React.createElement(ProfileScreen, null) : null, /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/data.js
try { (() => {
// Sample data lifted from the product prototype: real Apple Music artwork and real episode stills.
window.TS_DATA = {
  episode: {
    title: "Testing Questlove's Music Knowledge",
    guest: 'Questlove',
    format: 'Testing',
    date: 'Jul 3',
    duration: '12 min',
    playable: true,
    still: 'https://ugc.production.linktr.ee/8b81034b-5185-4e3d-bec4-e0a915799447_ab6772ab000016924bea5a17acfd2d97fe0d592f.jpeg',
    blurb: 'Ten songs, a drummer who has heard all of them, and one he could not place until the second chorus.'
  },
  also: [{
    title: "Testing Juanes' Latin Music Knowledge",
    format: 'testing',
    date: 'Aug 7',
    duration: '5 min',
    playable: true,
    still: 'https://ugc.production.linktr.ee/a9442b75-79d2-4578-9341-73cc3c2cd383_maxresdefault.jpeg'
  }, {
    title: "Testing Travis Barker's Music Knowledge",
    format: 'testing',
    date: 'Jul 10',
    duration: '8 min',
    playable: true,
    still: 'https://ugc.production.linktr.ee/fc166702-7fcc-483e-907f-8a9298b94f6e_maxresdefault.jpeg'
  }, {
    title: 'Jon Hamm vs John Slattery: Track Star Versus',
    format: 'versus',
    still: 'https://ugc.production.linktr.ee/019143dc-60dc-418e-99e3-83d241f131b1_maxresdefault.jpeg'
  }, {
    title: 'Mariah Carey Extended Cut',
    format: 'extended',
    still: 'https://ugc.production.linktr.ee/a33a4723-d658-497d-b6d1-50779d9017fb_hqdefault.jpeg'
  }],
  tracklist: [{
    t: 'God Only Knows',
    a: 'The Beach Boys',
    y: '1966',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d4/22/97/d422973f-c3ff-0600-2b6b-a22f7c0cf0f9/16UMGIM17479.rgb.jpg/600x600bb.jpg',
    guessed: true,
    community: 9.1
  }, {
    t: 'Uprising',
    a: 'Muse',
    y: '2009',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e2/8d/41/e28d412b-da8b-6f0b-227a-faa9a453e612/825646092666.jpg/600x600bb.jpg',
    guessed: true,
    community: 7.4
  }, {
    t: 'Calling Your Name',
    a: 'Jon Batiste',
    y: '2023',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/70/cc/01/70cc0183-96b3-06e1-2f8b-484ba370e4ea/23UMGIM69122.rgb.jpg/600x600bb.jpg',
    guessed: false,
    community: 6.8
  }, {
    t: 'Right Back to It',
    a: 'Waxahatchee',
    y: '2024',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/95/97/dc9597a1-3479-f780-8c51-bfe91236fa09/0045778786060.png/600x600bb.jpg',
    guessed: true,
    community: 8.6
  }, {
    t: 'On Melancholy Hill',
    a: 'Gorillaz',
    y: '2010',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/b8/f9/b9/b8f9b9f8-a609-bde2-0302-349436ffc508/825646291038.jpg/600x600bb.jpg',
    guessed: true,
    community: 8.2
  }, {
    t: 'Let Down',
    a: 'Radiohead',
    y: '1997',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg',
    guessed: false,
    community: 9.3
  }, {
    t: 'Last Nite',
    a: 'The Strokes',
    y: '2001',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/ea/04/d4/ea04d45d-6f5d-ede6-fb64-71f3e6a6e62f/dj.ojkzzidd.jpg/600x600bb.jpg',
    guessed: true,
    community: 8.0
  }, {
    t: 'Dreams',
    a: 'Fleetwood Mac',
    y: '1977',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d2/48/f4/d248f4ae-a7e4-a48e-1588-6617de3e8d76/mzi.izeorbmm.jpg/600x600bb.jpg',
    guessed: true,
    community: 9.0
  }, {
    t: 'Graceland',
    a: 'Paul Simon',
    y: '1986',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/92/0c/8c/920c8c14-cf08-a973-e4c1-8792f1e9183c/886443445680.jpg/600x600bb.jpg',
    guessed: false,
    community: 8.8
  }, {
    t: 'Abbey Road medley',
    a: 'The Beatles',
    y: '1969',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg',
    guessed: true,
    community: 9.5
  }],
  album: {
    title: 'Pet Sounds',
    artist: 'The Beach Boys',
    year: '1966',
    genre: 'Rock',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/35/bb/c4/35bbc4eb-9387-97b0-b138-64b7a949ea43/13UABIM03512.rgb.jpg/600x600bb.jpg',
    url: 'https://music.apple.com/us/album/pet-sounds/1440841241?uo=4',
    community: 9.1,
    scores: 2841
  },
  shelf: [{
    t: 'OK Computer',
    a: 'Radiohead',
    s: '9.3',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg'
  }, {
    t: 'Rumours',
    a: 'Fleetwood Mac',
    s: '9.0',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg'
  }, {
    t: 'Graceland',
    a: 'Paul Simon',
    s: '8.8',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/73/c1/a773c1f0-281c-324c-204f-540444080ea8/886443445697.jpg/600x600bb.jpg'
  }, {
    t: 'Tigers Blood',
    a: 'Waxahatchee',
    s: '8.6',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dc/95/97/dc9597a1-3479-f780-8c51-bfe91236fa09/0045778786060.png/600x600bb.jpg'
  }, {
    t: 'Plastic Beach',
    a: 'Gorillaz',
    s: '8.2',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/69/1f/7e691f10-3cc1-67ec-5dc3-df3d8df68fa7/5099962829359.jpg/600x600bb.jpg'
  }, {
    t: 'Blonde',
    a: 'Frank Ocean',
    s: '8.1',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/62/50/426250f9-7e39-f907-687c-442caa436636/dj.nhptxziz.jpg/600x600bb.jpg'
  }, {
    t: 'Songs in the Key of Life',
    a: 'Stevie Wonder',
    s: '9.4',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/eb/1f/12/eb1f12ec-474c-63aa-43af-09282f423b9d/00602537004737.rgb.jpg/600x600bb.jpg'
  }, {
    t: 'Abbey Road',
    a: 'The Beatles',
    s: '9.5',
    art: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/53/43/485343e3-dd6a-0034-faec-f4b6403f8108/13UMGIM63890.rgb.jpg/600x600bb.jpg'
  }],
  artist: {
    name: 'Questlove',
    role: 'Drummer, producer, archivist',
    still: 'https://ugc.production.linktr.ee/8b81034b-5185-4e3d-bec4-e0a915799447_ab6772ab000016924bea5a17acfd2d97fe0d592f.jpeg',
    bio: 'Two appearances on the show, and the only guest so far to name a track from the intro drum fill alone.',
    appearances: [{
      title: "Testing Questlove's Music Knowledge",
      format: 'testing',
      date: 'Jul 3',
      duration: '12 min',
      playable: true,
      still: 'https://ugc.production.linktr.ee/8b81034b-5185-4e3d-bec4-e0a915799447_ab6772ab000016924bea5a17acfd2d97fe0d592f.jpeg'
    }, {
      title: 'Questlove Teaches Us How to Listen to Earth, Wind & Fire',
      format: 'talk',
      date: 'May 15',
      duration: '56 min',
      still: 'https://ugc.production.linktr.ee/c1b5a835-b396-4f91-b57b-d2eee0cf033c_maxresdefault.jpeg'
    }],
    playedByOthers: [{
      title: "Testing Travis Barker's Music Knowledge",
      format: 'testing',
      date: 'Jul 10',
      duration: '8 min',
      playable: true,
      still: 'https://ugc.production.linktr.ee/fc166702-7fcc-483e-907f-8a9298b94f6e_maxresdefault.jpeg'
    }, {
      title: 'A History of Pop Punk in 10 songs',
      format: 'tensongs',
      still: 'https://ugc.production.linktr.ee/53b80022-8cce-4bdd-a042-1aaf4155194b_hqdefault.jpeg'
    }, {
      title: 'Hip-Hop’s Origin Story in 10 Songs',
      format: 'tensongs',
      still: 'https://ugc.production.linktr.ee/a5de1c9a-3919-470a-a4c0-759d04c62297_hqdefault.jpeg'
    }],
    standouts: [{
      t: 'Calling Your Name',
      a: 'Jon Batiste',
      s: '8.9',
      art: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/70/cc/01/70cc0183-96b3-06e1-2f8b-484ba370e4ea/23UMGIM69122.rgb.jpg/600x600bb.jpg'
    }, {
      t: 'Let Down',
      a: 'Radiohead',
      s: '9.3',
      art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/600x600bb.jpg'
    }, {
      t: 'Graceland',
      a: 'Paul Simon',
      s: '8.8',
      art: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/92/0c/8c/920c8c14-cf08-a973-e4c1-8792f1e9183c/886443445680.jpg/600x600bb.jpg'
    }, {
      t: 'God Only Knows',
      a: 'The Beach Boys',
      s: '9.4',
      art: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d4/22/97/d422973f-c3ff-0600-2b6b-a22f7c0cf0f9/16UMGIM17479.rgb.jpg/600x600bb.jpg'
    }]
  },
  reviews: [{
    person: 'Nadia Oyelaran',
    handle: '@nadiao',
    ago: '2m',
    record: 'Pet Sounds',
    artist: 'The Beach Boys',
    score: '9.4',
    replies: 7,
    body: 'Still the record I put on when I need to remember what a studio is actually for.'
  }, {
    person: 'Theo Marsh',
    handle: '@theom',
    ago: '9m',
    record: 'Blonde',
    artist: 'Frank Ocean',
    score: '8.1'
  }, {
    person: 'Ivy Sandoval',
    handle: '@ivys',
    ago: '14m',
    record: 'Tigers Blood',
    artist: 'Waxahatchee',
    score: '7.6'
  }, {
    person: 'Cal Beaumont',
    handle: '@calbe',
    ago: '21m',
    record: 'OK Computer',
    artist: 'Radiohead',
    score: '9.3',
    replies: 3,
    body: 'Thirty years on and the paranoia still sounds like it was recorded this morning.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/data.js", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/screen-album.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AlbumScreen({
  go
}) {
  const a = D.album;
  const [mine, setMine] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,440px) minmax(0,1fr)',
      gap: 62,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Art, {
    src: a.art,
    alt: a.title,
    style: {
      boxShadow: 'var(--elevation-screen)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow"
  }, a.genre, " \xB7 ", a.year), /*#__PURE__*/React.createElement("h1", {
    className: "ts-display-hero",
    style: {
      margin: '14px 0 0',
      fontSize: 'clamp(46px,6vw,88px)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "ts-body-large",
    style: {
      margin: '14px 0 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      go('artist');
    },
    style: {
      color: 'var(--text-secondary)'
    }
  }, a.artist)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 40,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow"
  }, "Community"), /*#__PURE__*/React.createElement("div", {
    className: "ts-score-large"
  }, a.community.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)'
    }
  }, a.scores.toLocaleString(), " scores")), /*#__PURE__*/React.createElement(ScoreDial, {
    size: 140,
    value: mine == null ? 0 : mine,
    state: mine == null ? 'empty' : 'scored',
    onChange: setMine
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "play",
    href: a.url
  }, "Play on Apple Music"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "plus"
  }, "Add to list"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "bookmark"
  }, "Save"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "share"
  }, "Share"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What the room said",
    lead: "Every score comes with a sentence worth reading.",
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('profile')
    }, "Open the full feed")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 18,
      alignItems: 'start'
    }
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.person,
    kind: r.body ? 'review' : 'quick',
    art: a.art
  }, r)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Heard on the show",
    lead: "Episodes where a track from this record came up."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, D.also.map(x => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: x.title
  }, x, {
    size: "small"
  })))))));
}
window.AlbumScreen = AlbumScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/screen-album.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/screen-artist.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ArtistScreen({
  go
}) {
  const a = D.artist;
  const ranked = D.shelf.slice(0, 6).slice().sort((x, y) => Number(y.s) - Number(x.s));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    "data-surface": "stage",
    style: {
      position: 'relative',
      minHeight: 520,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.still,
    alt: "",
    onError: ev => {
      ev.currentTarget.style.display = 'none';
    },
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(.62) saturate(.85)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--noise)',
      backgroundSize: '170px 170px',
      opacity: .04,
      mixBlendMode: 'soft-light'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(96deg, rgba(5,5,6,.96) 3%, rgba(5,5,6,.74) 30%, rgba(5,5,6,.3) 60%, rgba(5,5,6,.5) 100%), linear-gradient(to top, var(--bg-stage) 2%, transparent 34%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      width: '100%',
      position: 'relative',
      zIndex: 2,
      paddingBottom: 44,
      paddingTop: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow"
  }, a.role), /*#__PURE__*/React.createElement("h1", {
    className: "ts-display-hero",
    style: {
      margin: '12px 0 0',
      fontSize: 'clamp(46px,6.4vw,88px)'
    }
  }, a.name), /*#__PURE__*/React.createElement("p", {
    className: "ts-prose-review",
    style: {
      margin: '16px 0 0',
      maxWidth: '46ch',
      color: 'var(--text-secondary)'
    }
  }, a.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "play"
  }, "Play their episode"), /*#__PURE__*/React.createElement("a", {
    href: "#appeared",
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: 2
    }
  }, a.appearances.length, " appearances on the show")))), /*#__PURE__*/React.createElement("section", {
    id: "appeared",
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: `On the show`,
    lead: `Episodes ${a.name} sat down for.`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, a.appearances.map(e => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: e.title
  }, e)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Played by somebody else",
    lead: `Episodes where a ${a.name} track came up and the guest had to name it.`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, a.playedByOthers.map(e => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: e.title,
    size: "small"
  }, e)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Records, by community score",
    lead: "Ranked by everybody's scores, not by release date.",
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('album')
    }, "Open the shelf")
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, ranked.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: r.t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '14px 10px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow",
    style: {
      width: 28
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement(Art, {
    src: r.art,
    alt: r.t,
    size: 56
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 16,
      fontVariationSettings: '"wdth" 100,"wght" 600'
    }
  }, r.t), /*#__PURE__*/React.createElement("span", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)'
    }
  }, r.a)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small",
    icon: "plus"
  }, "Add to list"), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline"
  }, r.s))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Standout tracks",
    lead: "The songs from these records that the room scores highest."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 18
    }
  }, a.standouts.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Art, {
    src: s.art,
    alt: s.t
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 8,
      bottom: 8,
      background: 'var(--bg-on-media)',
      color: 'var(--text-on-media)',
      padding: '2px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 22
    }
  }, s.s))), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-default",
    style: {
      marginTop: 10,
      fontVariationSettings: '"wdth" 100,"wght" 500'
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)'
    }
  }, s.a)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "What the room said",
    lead: `Scores and reviews on ${a.name} records, newest first.`,
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('profile')
    }, "Open the full feed")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 18,
      alignItems: 'start'
    }
  }, D.reviews.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.person,
    kind: r.body ? 'review' : 'quick'
  }, r, {
    art: a.standouts[i % a.standouts.length].art,
    record: a.standouts[i % a.standouts.length].t,
    artist: a.name
  })))))));
}
window.ArtistScreen = ArtistScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/screen-artist.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/screen-episode.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EpisodeScreen({
  go
}) {
  const e = D.episode;
  const [track, setTrack] = React.useState(0);
  const [scores, setScores] = React.useState({});
  const [playing, setPlaying] = React.useState(false);
  const t = D.tracklist[track];
  const mine = scores[track];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    "data-surface": "stage",
    style: {
      position: 'relative',
      paddingTop: 54,
      paddingBottom: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.94fr) minmax(0,1.06fr)',
      gap: 54,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      go('artist');
    },
    style: {
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement(Chyron, {
    kicker: e.format,
    name: e.guest,
    meta: `${e.date} · ${e.duration}`
  })), /*#__PURE__*/React.createElement("h1", {
    className: "ts-body-large",
    style: {
      margin: '20px 0 0',
      maxWidth: '26ch',
      color: 'var(--text-secondary)',
      fontSize: 22,
      lineHeight: 1.3
    }
  }, e.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: playing ? 'pause' : 'play',
    onClick: () => setPlaying(p => !p)
  }, playing ? 'Pause the episode' : 'Watch the episode'), /*#__PURE__*/React.createElement("a", {
    href: "#tracklist",
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: 2
    }
  }, "Or score the ten songs he played"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: 'var(--elevation-screen), var(--elevation-on-air)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: e.still,
    alt: "",
    onError: ev => {
      ev.currentTarget.style.display = 'none';
    },
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '16/9',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: 12,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'var(--bg-on-media)',
      color: 'var(--text-on-media)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent-default)',
      display: 'block'
    }
  }), " New this week"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      background: 'var(--bg-on-media)',
      color: 'var(--text-on-media)',
      fontSize: 12,
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)'
    }
  }, e.duration)))), /*#__PURE__*/React.createElement("section", {
    id: "tracklist",
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "The tracklist",
    lead: "Every song from the episode, in order. Hear thirty seconds, give it a number, and it lands on your shelf.",
    aside: /*#__PURE__*/React.createElement("span", {
      className: "ts-body-small",
      style: {
        color: 'var(--text-muted)'
      }
    }, "Scores save when you sign in")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,360px) minmax(0,1fr)',
      gap: 62,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Art, {
    src: t.art,
    alt: t.t,
    style: {
      boxShadow: 'var(--elevation-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      marginTop: 18,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.guessed ? 'var(--status-guessed)' : 'var(--status-missed)',
      display: 'block'
    }
  }), t.guessed ? 'Guessed on air' : 'Missed on air'), /*#__PURE__*/React.createElement("h3", {
    className: "ts-display-card",
    style: {
      margin: '10px 0 0',
      fontSize: 30
    }
  }, t.t), /*#__PURE__*/React.createElement("p", {
    className: "ts-body-default",
    style: {
      margin: '6px 0 0',
      color: 'var(--text-muted)'
    }
  }, t.a, " \xB7 ", t.y), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small",
    icon: "play"
  }, "Preview"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small",
    iconAfter: "external",
    href: D.album.url
  }, "Apple Music"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap',
      marginBottom: 30,
      paddingBottom: 22,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow"
  }, "Named on air"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, D.tracklist.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.t,
    onClick: () => setTrack(i),
    title: s.t,
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      background: s.guessed ? 'var(--status-guessed)' : 'transparent',
      boxShadow: s.guessed ? i === track ? '0 0 0 2px var(--text-primary)' : 'none' : `inset 0 0 0 1px var(--status-missed)${i === track ? ', 0 0 0 2px var(--text-primary)' : ''}`,
      color: s.guessed ? 'var(--text-primary)' : 'var(--status-missed)'
    }
  }, i + 1))), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 26,
      color: 'var(--text-primary)'
    }
  }, D.tracklist.filter(s => s.guessed).length, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "/", D.tracklist.length))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ScoreDial, {
    value: mine == null ? 0 : mine,
    state: mine == null ? 'empty' : 'scored',
    onChange: v => setScores(s => ({
      ...s,
      [track]: v
    }))
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ts-eyebrow"
  }, "Community"), /*#__PURE__*/React.createElement("div", {
    className: "ts-score-large",
    style: {
      marginTop: 6
    }
  }, t.community.toFixed(1)), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "from 2,841 scores"))), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: '34px 0 0',
      padding: 0,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, D.tracklist.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.t
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTrack(i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '11px 10px',
      background: i === track ? 'var(--bg-surface)' : 'transparent',
      border: 0,
      borderBottom: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, i + 1), /*#__PURE__*/React.createElement(Art, {
    src: s.art,
    alt: s.t,
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 400,
      fontVariationSettings: '"wdth" 100,"wght" 600',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, s.a)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.guessed ? 'headphones' : 'close',
    size: 15,
    style: {
      color: s.guessed ? 'var(--status-guessed)' : 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 22,
      color: scores[i] != null ? 'var(--accent-score)' : 'var(--text-muted)'
    }
  }, scores[i] != null ? scores[i].toFixed(1) : '–')))))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Also this month",
    aside: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('album')
    }, "See all 129 episodes")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, D.also.map(a => /*#__PURE__*/React.createElement(EpisodeCard, _extends({
    key: a.title
  }, a)))))));
}
window.EpisodeScreen = EpisodeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/screen-episode.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/screen-profile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProfileScreen() {
  const [tab, setTab] = React.useState('Reviews');
  const top5 = D.shelf.slice(0, 5);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 54
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 26,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      background: 'var(--bg-raised)',
      boxShadow: 'inset 0 0 0 1px var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 26,
      fontVariationSettings: '"wdth" 100,"wght" 600',
      color: 'var(--text-secondary)'
    }
  }, "NO"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "ts-display-section",
    style: {
      margin: 0
    }
  }, "Nadia Oyelaran"), /*#__PURE__*/React.createElement("p", {
    className: "ts-body-default",
    style: {
      margin: '8px 0 0',
      color: 'var(--text-muted)'
    }
  }, "@nadiao \xB7 214 scores \xB7 19 lists \xB7 joined 2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(CertifiedSeal, {
    state: "certified"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "share"
  }, "Share taste card"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Your taste, in five records",
    lead: "A top five, a current rotation, and every score you have ever given."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
      gap: 18
    }
  }, top5.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 23,
      color: 'var(--text-primary)'
    }
  }, r.s)), /*#__PURE__*/React.createElement(Art, {
    src: r.art,
    alt: r.t
  }), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      marginTop: 10,
      fontVariationSettings: '"wdth" 100,"wght" 500'
    }
  }, r.t), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)'
    }
  }, r.a)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section) 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: WRAP
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, ['Reviews', 'Lists', 'Rotation'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    "aria-pressed": tab === t,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      padding: '9px 18px',
      borderRadius: 'var(--corner-pill)',
      border: 0,
      cursor: 'pointer',
      background: tab === t ? 'var(--text-primary)' : 'transparent',
      color: tab === t ? 'var(--bg-stage)' : 'var(--text-muted)',
      boxShadow: tab === t ? 'none' : 'inset 0 0 0 1px var(--border-subtle)'
    }
  }, t))), tab === 'Reviews' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 18,
      alignItems: 'start'
    }
  }, D.reviews.map(r => /*#__PURE__*/React.createElement(ReviewCard, _extends({
    key: r.person,
    kind: r.body ? 'review' : 'quick',
    art: D.album.art
  }, r)))) : tab === 'Rotation' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      overflowX: 'auto',
      paddingBottom: 12
    }
  }, D.shelf.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      flex: '0 0 172px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ts-eyebrow"
  }, "Scored"), /*#__PURE__*/React.createElement("span", {
    className: "ts-score-inline",
    style: {
      fontSize: 23,
      color: 'var(--text-primary)'
    }
  }, r.s)), /*#__PURE__*/React.createElement(Art, {
    src: r.art,
    alt: r.t,
    size: 172
  }), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      marginTop: 10
    }
  }, r.t), /*#__PURE__*/React.createElement("div", {
    className: "ts-body-small",
    style: {
      color: 'var(--text-muted)'
    }
  }, r.a)))) :
  /*#__PURE__*/
  /* Empty states are invitations, not errors. */
  React.createElement("div", {
    style: {
      padding: '54px 34px',
      borderRadius: 'var(--corner-card)',
      boxShadow: 'inset 0 0 0 1px var(--border-subtle)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list",
    size: 26,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "ts-display-card",
    style: {
      margin: '16px 0 0'
    }
  }, "No lists yet. Start one."), /*#__PURE__*/React.createElement("p", {
    className: "ts-prose-review",
    style: {
      margin: '10px 0 22px',
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Ten records that explain a year, a city or an argument you keep having. Pick the first one."), /*#__PURE__*/React.createElement(Button, {
    icon: "plus"
  }, "Start a list")))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/screen-profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/trackstar-web/shell.jsx
try { (() => {
const {
  Button,
  Icon,
  Chyron,
  CertifiedSeal,
  ScoreDial,
  EpisodeCard,
  ReviewCard
} = window.TrackStarDesignSystem_75f3a7;
const D = window.TS_DATA;
const WRAP = {
  maxWidth: 'var(--wrap-max)',
  margin: '0 auto',
  padding: '0 var(--wrap-pad)'
};
function Header({
  route,
  go,
  signedIn,
  onSignIn
}) {
  const links = [['episode', 'Episodes'], ['artist', 'Artists'], ['album', 'Records'], ['profile', 'Community']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'color-mix(in srgb,var(--bg-page) 88%,transparent)',
      backdropFilter: 'blur(16px) saturate(1.2)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      alignItems: 'center',
      gap: 30,
      height: 70
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('episode');
    },
    style: {
      display: 'block',
      width: 34,
      color: 'var(--accent-default)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-trackstar.svg",
    alt: "Track Star",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 14
    }
  }, links.map(([r, l]) => /*#__PURE__*/React.createElement("a", {
    key: r,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    },
    style: {
      color: route === r ? 'var(--text-primary)' : 'var(--text-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--bg-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--corner-pill)',
      padding: '10px 14px 10px 16px',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      minWidth: 250,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  }), " Search episodes, records, people", /*#__PURE__*/React.createElement("kbd", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'inherit',
      fontSize: 11,
      border: '1px solid var(--border-subtle)',
      borderRadius: 4,
      padding: '2px 6px'
    }
  }, "\u2318K")), signedIn ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('profile');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--bg-raised)',
      boxShadow: 'inset 0 0 0 1px var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontVariationSettings: '"wdth" 100,"wght" 600'
    }
  }, "NO"), "Nadia") : /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "small",
    onClick: onSignIn
  }, "Sign in")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--accent-default)',
      color: 'var(--text-on-accent)',
      padding: '46px 0 32px',
      marginTop: 'var(--pad-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      display: 'flex',
      alignItems: 'center',
      gap: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-trackstar.svg",
    alt: "Track Star",
    style: {
      width: 34,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      fontSize: 14,
      margin: '0 auto',
      flexWrap: 'wrap',
      fontVariationSettings: '"wdth" 100,"wght" 500'
    }
  }, ['Episodes', 'Charts', 'Lists', 'Reviews', 'Podcast', 'Support'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--text-on-accent)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      fontSize: 14
    }
  }, ['Instagram', 'YouTube', 'TikTok'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--text-on-accent)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 20,
      borderTop: '1px solid rgba(33,9,0,.22)',
      display: 'flex',
      gap: 18,
      fontSize: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariationSettings: '"wdth" 100,"wght" 600'
    }
  }, "\xA9 2026 Track Star"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-accent)'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-accent)'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Catalogue, artwork and previews via Apple Music"))));
}
function SectionHead({
  title,
  lead,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 26,
      marginBottom: 38,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "ts-display-section",
    style: {
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    className: "ts-body-default",
    style: {
      margin: '12px 0 0',
      color: 'var(--text-muted)',
      maxWidth: '50ch'
    }
  }, lead) : null), aside);
}

/* Artwork never degrades to a broken image: null or a failed load lands on the disc glyph,
   which is the documented missing-artwork mark. */
function Art({
  src,
  alt = '',
  size,
  radius = 'var(--corner-cover)',
  style
}) {
  const [bad, setBad] = React.useState(false);
  React.useEffect(() => setBad(false), [src]);
  const box = size ? {
    width: size,
    height: size,
    borderRadius: radius,
    flex: '0 0 auto',
    ...style
  } : {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius,
    ...style
  };
  if (!src || bad) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-label": alt ? alt + ' — no artwork' : 'No artwork',
      style: {
        ...box,
        background: 'var(--bg-raised)',
        boxShadow: 'inset 0 0 0 1px var(--border-subtle)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "disc",
      size: size ? Math.max(14, size * 0.3) : 34
    }));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    onError: () => setBad(true),
    style: {
      ...box,
      objectFit: 'cover',
      background: 'var(--bg-raised)'
    }
  });
}
Object.assign(window, {
  WRAP,
  D,
  Header,
  Footer,
  SectionHead,
  Art,
  Button,
  Icon,
  Chyron,
  CertifiedSeal,
  ScoreDial,
  EpisodeCard,
  ReviewCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/trackstar-web/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Chyron = __ds_scope.Chyron;

__ds_ns.EpisodeCard = __ds_scope.EpisodeCard;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldInfo = __ds_scope.FieldInfo;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MenuItem = __ds_scope.MenuItem;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ScoreDial = __ds_scope.ScoreDial;

__ds_ns.CertifiedSeal = __ds_scope.CertifiedSeal;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
