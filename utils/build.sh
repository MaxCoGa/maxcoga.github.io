for path in $(find mod/ -type d)
    do echo "https://maxks.org/${path}" >> sitemap.txt
done

sed -i 's/mod/?/g'  sitemap.txt