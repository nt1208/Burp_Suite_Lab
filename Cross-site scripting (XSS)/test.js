const payload = "''-alert(1)-''";
const payload_1 = "";
const encodedPayload = encodeURIComponent(payload);
const encodedPayload_1 = encodeURIComponent(payload_1);
console.log("Encoded payload:", encodedPayload);
console.log("Encoded payload_1:", encodedPayload_1);
alert("1");
