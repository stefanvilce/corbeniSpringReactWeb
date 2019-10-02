# corbeniSpringReactWeb
# A Spring Boot Application which uses React on Frontend to get the content from REST / JSON
The first commit

It has to be carefully with the requests from Javascript Axios and CORS principes

<pre>
Compared URL                                             Outcome  Reason
-------------------------------------------------------  -------  ----------------------
http://www.example.com/dir/page2.html                    Success  Same protocol and host
http://www.example.com/dir2/other.html                   Success  Same protocol and host
http://username:password@www.example.com/dir2/other.html Success  Same protocol and host
http://www.example.com:81/dir/other.html                 Failure  Same protocol and host but different port
https://www.example.com/dir/other.html                   Failure  Different protocol
http://en.example.com/dir/other.html                     Failure  Different host
http://example.com/dir/other.html                        Failure  Different host (exact match required)
http://v2.www.example.com/dir/other.html                 Failure  Different host (exact match required)
http://www.example.com:80/dir/other.html                 Depends  Port explicit. Depends on implementation in browser.
</pre>

