---
title: Hugo & CloudCannon Docs
nav_title: About the demo
weight: 1
---

This site serves as a content-driven example website, configured for, and editable on, CloudCannon.

## Adding Content

The `docs` collecting in CloudCannon is configured with two schemas: `article` and `guide`. When adding content to the collection in CloudCannon, an editor will be presented with a choice of content type to add.

The `guide` schema adds an extra `guide_label` key to the front matter, which is shown above the title on the page — see the [Aotearoa Birds](/docs/about/) page for an example of this layout.

When a schema file is changed, CloudCannon will update any corresponding collection items the next time they are opened in a CloudCannon editor, allowing you to add, remove, or rearrange inputs across all content of a schema type.

## Shortcodes

This site contains two custom shortcodes, configured for editing through the CloudCannon Snippets feature. To see how these are configured for CloudCannon, see the `cloudcannon.config.yml` file at the root of this repository.

### Shotcode: custom_code

An enriched code highlighting snippet, including an expand/collapse button and a filename label.

_Example template:_

```go-html-template
{{</* custom_code lang="js" filename="search.js" */>}}
window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: "#search" });
});
{{</* /custom_code */>}}
```

_Example output:_

{{< custom_code lang="js" filename="search.js" >}}
window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: "#search" });
});
{{< /custom_code >}}

### Shortcode: tree

A filesystem tree with automatic box-drawing characters, and optional diff-style highlighting. 

All `>` characters will be replaced with the appropriate line character for the location. Lines may be prefixed with `+` to highlight them in the style of a code diff.

_Example template:_

```go-html-template
{{</* tree */>}}
cc-hugo-demo
>> content
>  >> _index.md
>> public
+   >> _pagefind
{{</* /tree */>}}
```

_Example output:_

{{< tree >}}
cc-hugo-demo
>> content
>  >> _index.md
>> public
+   >> _pagefind
{{< /tree >}}