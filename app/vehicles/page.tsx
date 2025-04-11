'use client';
import React, { useState } from 'react';
import Link from "next/link";


const getCategoryTitle = (category) => {
  switch (category) {
    case 'service': return 'Service & Maintenance';
    case 'sales': return 'Vehicle Sales';
    default: return 'Welcome to Honda';
  }
};

const getCategoryDescription = (category) => {
  switch (category) {
    case 'service':
      return 'Find answers to your questions about vehicle service, parts, and maintenance.';
    case 'sales':
      return 'Learn more about our vehicle lineup, pricing, and offers.';
    default:
      return 'Your trusted destination for everything Honda.';
  }
};

const vehicles = [
  {
    name: 'All New Amaze',
    brochureUrl: 'All New Amaze_new3Dec.pdf',
    // h1:"You are the chase",
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUWFRUVFRcXFxcWGBUXFRUXFhUYGBcYHSggGB0lGxUVITEhJSorLjAuFyAzODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLy0rLS0tKy0tLS0tLSsrLS0vLS0tLS0uLS0rLS0tLS0tKy0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABOEAACAQIDAwgDCg0CBQQDAAABAgMAEQQSIQUxQQYTIlFhcYGRMqGxBxQjQlJicpLB0RUzQ1NUgqKywtLT4fCToxdjg7PxJDRz4hZEZP/EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QANhEAAgECAwUECQQCAwAAAAAAAAECAxEEEjEFEyFBUXGRodEUFSIyQmGBscEWUuHwQ6IGJPH/2gAMAwEAAhEDEQA/APYLV1qWkqwgdautSOwAJJsACSeoDU0IxWLaTTVU6tzMPnfJHzd/XxWgtpUZVHZE2L2kBdY9SNC3xQRvA+UfUOOotQbESXOY6ngTqR3X3dwqdl6qGYhXkOSNgBezOSNDxA7e2pO0UdvD4enTX5B21NrNfm4Rmk4neF/vVTBbDW+eYmRzqb6i/b10UTDJEMqgdp338aifEVC9+LOgtPZLKsBoNO6kM1D3xJqBsSae8BUgmZ6jbEdtCnnPXULyt11F1CaooLNiO2ojiKEtIeuoyx66i6jJqigq2IqNsT20LJNMN6W8ZNUUE2xI66iOJocRTDUczJqigicT20w4mhxppI6x50ZmS3KCBxNMOJqgWHWPOm5x1jzpXkPdIvnEUwz1TuOsedd40ryHu0WjiKYZ6gy12U0cRZYkhnphmppU8ajnldAWEbKBvd1IA7rjKvefVSdx+yWGIAu7ZRwG9j3L9psKrT7WPoxjIOJ3ue9uHcKFjEKx0dWY9TBifImrEeCmb0YZjfqhmI8wlqg870Qt5h4cZzX1aIjJTS1Ek5P4o/kH/ZX/ALjLVlOSWKNuiq/TdRb6mehYeq/hZXLamCjrVj33+wCJpL1p4uRcp9KSJfol39qpVqLkWo9Oe/0Y8p82kYeqrFgqz5Gae38DH4r9if5sY2urcryMh/Oz+Ag+2E11T9X1fl3lP6lwnSXcvM9ipa6msd3aQO69WnlCltBUdkil/FyB1tewdrCykg39EyG3Wo4gUMm2FiY/xEqyJwSa+dR1LIvpdmYeNaXEYaORCjqGU7wfUew9tUkWSHTpTR8De8qDqN/xgHXfN2GhSCMpweaDBg2XiGWxEa3HStIxOvD8X7DSHk82UAOqnjoSOy26j+DxUb3CuGINjbgeo9R7KqbV27hoDaWVVPAEqCbaG2Ygb9N9LMnqaPTMQlwfgBG5Msfyw/0z/Upo5KLxlbwUD2k0zE+6FgV+Mx7jGR6nNUJfdTwA6/M/YpqSykXjsZ+7wXkExyQi4yy/7Y/gp45JYfrkPey/YtAG91zA9R/3f6VQt7r+E4Jf/U+2MU7R6EHjMW/8jNOOSmF4ox/XcewinryWwg/JH/Ul/nrJN7sOF/NMfP7bUxvdjw/CCTyX7ZBR7PQi8Tin/kl3s2Y5OYUfkF8S59rU/wDAGF/R4/FQfbWEb3ZYf0eT6q/1aY3uzR/o7fVH9WnePQhvcQ9aku9noA2Hhv0aH/TT7qUbIw43YeH/AEk+6vOT7tCfozfVH9Wmt7tC/ozeQ/novHoRcq7+N97PSxs6H8zF/pp91L7zj/Np9Rfury8+7R//ADeYH89NPu0n9GHl/wDenmXQg1Uesn3s9TGHT5C/VH3UvMjqHkK8q/40H9HHkP5qb/xoP6P+7TzroLdz6nq+QdQpLV5QfdlP6P8Aumk/4yn8wfJPvp7xdCO6n1PWDTST215Ofdlb8x+wv9Su/wCMvXh/2B/VqSqroG5n1PVyT1moZ58vE15ePdkH6OfqD+rTMV7qpkTNHhGOUhWZmRRmYMwGXp8Ee30TUlVjfQW5kb3ETsx3nzqIBu3115PjPdTxg9CKJO+7ezKPVQTGe6HtGQ398ZexFUesgmpvFJcEiSw75s9xa4+Nb9YD1XvVefERLq8qL9Ike0V4VgsdjMXKIvfErO5CqDKVBJNgNSFGp41uMF7jGLbpTyRR9ZZy5/ZBHrqp4qb0SJqhHmzU4nlXs2P0sYh7EGb2H7KFYn3SdnL6CTy9wy+21Ow/uX7Mi1xG0FNt4TIv2sfVRTD7P5NwC/40j5RfXw6INVutUfMlu4LkZqb3UAdIdn37ZHb2a1NhuUu3J/8A2+DSNTxWEn9rStZFy42XDph8It/mxgHzVWNQYn3V2OkcAH0lf7SvsqN29X4krJaLwBo2Xynbpc+wvwugt4FaSnP7p2LvvQdll+0V1Ky+Q7s9W52lZrjxHtqtelzU2hJgnlXtLEwughljUMYxlMedulIkZJOawHTuNPi1U2lt2TDRyzTTB+b3KqBQT0QqMSTZi7KugNrndbTuUuJYBXWOOR0Nsrxxs1idMrOptaxNhvv2GvMOW+35JFjw8gjBQl2CKEAdh0QQtgSqHf1yMOFVTllSvzNFKjKpJpPgldssYLlZKsiyFuk8oJ4ALzgd9PnMASd/RodtDaszxLK4PNsTGSwNnaMABlPFwuVSR1C++slJjrve+7QeFGNm4+OVVXFztkiGWBcyoFzOGfehFja54k21qtR4kLjodgYrEZve0TSZcpYC11zXtfhwPHgaCYuBkYxsfhFZldOKFSVIY7r3G4E1o9nbUmmmkEEuIw0SblildC5JNmdlK3NrWFuPmPxYwkTS2MzSgDMpKnPID09Rci5JOoO49dXJEGyuvJjGHDnGBP8A04DFpCygLlbIbgnMddOiDVDCYJ5pFjjYtndUQ21YsQo6N9BmPXu17KN7HKOBNiL81qWjW4QIt9ApuDf5TEm5ve+tUocYkeWKHpMbATn4ul25tLWD7ukSbX0AOtSIlXaWyZcO/M4joS2BCAqxIbcSymyjTv7Ks7L5O4mcFoVL5CM4BAsGBIa7EA+idN+7fws4qOMKrSly+foymzluj0kdmIvplI3214aUuzcUZiQLwolhkViHdiPSkcWLdwAA6t5L4AD0wgcdAkjS7eiNeAuLk+A8aemxZgCTG7C2YFVZri9tABvvw8d2tem7KkwUODvJGVMmIWKMJeMvJlTnCzpZlj1tkBAJRtNQAE91R48BjRBBhsOUMKSAyq8rHMzqekz7uh66imNmH/AmIIvzbrvNnVl3a7yAAe+qrpchRqbXNj6Pfvsezzr0T3MYkx00qy4bDhY47/Bo8bZ3dY4+krjS7E27KqcqMHhcTgJMbhleOTDYhoZAztJmS/RdXclspDL0STY7ra5pKzE3YyuzOTs01zEpfKQGHRUDNfLZmYX9E1QaJSbKSSPS4AHqHXx1/wDNW4ZedstsiAA6HpSNaxZm6r3so0Hfck9htlYZoucknSBwWADBRzqooItdhdgSVuB1XudakknoJu2oGwHJ+SRGkSxVL58xtbKuY5bb9Ou3jQ9YlbVb26zx8OHnVyMc6bOnNhNBHYg3IFyxOpJ036dQFHMJs/DsoebELAS7AfBkiTKFJIsbXBaxt2cdSJJ6CbtqCsHybeRBIjoFN7h2sQQbG1hqP87aExqG1W9u37huoxtFo5pSRGI41AES6sCuoMgLakswJJ4aDcBRLB7LheMyzzGIBxGHto5y3sTuLAeNiL8KaSdrA3bUz+F2bnNgyqRcnObKR2EDf2fdVbER5Ta4PaL29dFdqIiuY4H52MhS0uU3vqebudFF1vpqes2tUEOHAYFlzLxF7EjsOtj21FrkNPmDjDVvZc+VirGySDIx3gahke3zWCnuzDjTSQOokcDqD32tUarfXj4D1DQVHsJEuNw+pUixuRbqINiPOhzYVx8VvI1sNky3UKbXIve4JNrqL21BKraxsehf4wNSYmK9UV8S07WO/s/YsMRR3m8+ltH3mOw6SIwZQQRurWNt2aVBnZiw3ljmbvudaGzQW3VEjFTeqo4m7I1tkKCaTd/AtSYiQ75GPs8qj5w/KPlUgIYXHj2VGY61qz4o4s4yg8skWcJih8a5PaaMbB2Y+MaURgfBqGsb21zHU9yk2+aazRQ1f2LtGSAvkdkzrlYqoZiL7gSRlv2GiyI3fI10PJGYqCVgFwDYsQdRccD111CPw/GdWiLHichFz12E1h4V1PKh52e8VmdvbTxHOtBCSLKCSou5uASb7wNQNNe3WtNevOeWuKaPFsVJDZFsQSCp5sAEEag76pxE3GJv2VRjUrNNX4N8et0U9u4bEQoMRiGORLiNJLPzjsOiuVr6XGYnfZTxNeV7TxrMzMSSSSSTvJJux8TetvtjGzYmJhNI0jRq5jvYWJB32AvuG+sFtDDhVjYG4dbjs0GnrNVUlnbfQ37VzUIRp8Pa4u3yKsMpBrX7EfDwFp5sQHZ49UEcrMpubqTlyk2AtrbXU1ksKF10Ja2g139duNeg7B5OYWbCxyskjMwJa7spJBKlQPRAuptpetCRwrlf31isVhyY2SOJiwTpNnjVW1F9yg2N++/GqOCxS4bDr0ojML5QOblJck5dASG4am43b6gl5SrFh+ZhitvF3kzkBt9wqqCdd+g7KzeDlDOOcZtNRYAm4INt40361JsjYNzYXEOyc4vweYFkAVVFzqSqgC+tXNoYxVIjiyO17sAiyFcvokMQQu8ggG/A1Q5T7dWUIkaFbdJma1ydRYAG1uOuvdbV3JiREBlZxrmV1s5YZbMraLY3uRa99O0U7q9hWJcJE7yGTFaAKMhawRQuhAGijhu3m+810mKZ84wy6WyiTIFNtbhbC/E2Y2IB4bqC7W2kJZCwXKugtxIHE9taDZuPigw/TYF1JCqjBs99RqtwB1k+viKzCxLtLEkYPZyg7sViL9hR4bfvGivuyvznvLEm13jnhuOPMTEKfquD40Gxq5sFhJQNExkikHUAzZZAO3ooK32MxWAEAhx2GV4xKXQmd4yrkZbLlANsqgWvY5b79aihvkBvcmxpw2HmlCEtPIqL3QqWFh2u+/8A5dZnY2JA2Til1zNKoHVlKozE/rRR69p663UmKwywvJhoUjRYZ1iEb84ourLmDEbwRqdSxvqK8/ws2TZLqAQ0mLALX0KLDbLa3Ek8eFJ3XEfBgvZmIyC2UMSSRu6OltSQbX6uwdlW8DCzsWmzOdApNyLa6dSgdXlUPJ8LmJZbjQX6j1U/lDtBA4WIggDpEXtc8PDr7eypp2VyL1CmJxMSKoFpHGYZbFjGBawYkgAXvZQSRY6C+tDCFpGLS3YgBVNtFUblAAsvHQW41FybdOlmA7CSotpu14dtN25tBMwWK+l8x4X6hbfbr7fGnfhcVuNgucRHEtsqSMxBWM30GoL3Gi8BY6nfuANDi7SS3ZSEAsii7CO51A06IJJPjVTYkwzMzAbhe5G/svv/APFGNpYjCCAnMxmJsiKLADi7vYgjeMoN766Aaty4XDLbgTYLEQwNmcBkKsjIyhs9xooBGnSCm/C3gau1doRSxGNMEkLEgh1ZbgDeLLGtwRwv1HhWdTEdJdNxFG1xUWma411IFwB3WBPH+1CncHEgSIWscvq+w0T2Zt1YVMfvWKezE5nAGXd0QSpJF7nxoXLZ2Yx3CXsubeQNLmw0vvtwva5tc9CjIS17dZBI4W9lNN6iaT1Cm0NtGUoRh44Mt9Y9M246iwvYjSiQYOoYcfUeIrOHFp1t5f3olsPEgB1N8uhHebj2D1VkxUbrMeg/4/iXTrbnlL7r+PwJiYjVJ0PVRmR0PX6qbzMZ+V5j7qwaHqKlJTAZjPC9PDP1X7/7Wo2uDj6m+sP5aeMHF8k+LH7LVJVZR0MlTZkanvIBGVuCqO7N9rU3nJOsf541oRhIvzY82/mpRBH+bXyv7ak8RPqVLYlLoZ3nJOseVdWj5tfkJ9RfurqPSJ9R+paPRHvNYLlngg8szk6gRhe/Ig+2t5WG2vOJJnIN/wD1AT/TAB/drVin7KR57Yye+lLovyjGsQJ3HC7DyNZDaUFoSv5qVl8MxA9RWtJJL8IW+cT5mh204LyzJwkQOPpWyn1qDVeCl7Tj1Ott+lfDwqL4X4P+oB8m4b4hGzRqqMGbPJHF0b2NjIy3PYK0eNxePxCy8yZZIy7qHUKMwDWvcdIaW4+dYoSEajTSvR9h46DAKAJHkE6Rz2ZSvNlgRcMpN726h6PHhsPKGBiwssEw5yFgUILJIjKLbyHGhsR27jTMTMhFo1VevLnuR3uxt4Wqxtfa3OPIBmCM5YBmuRc3Gm7Sq0eGkjKyZeiLMGsCLHUb9PA1EYuCMRDCRWOgykNlym+t7qc1xpwqGd9bLovDt7SeJqVs0xConSsbKii7WFzoo1NgaWAhAyyxDUgjNnDLa97AMNDcXuDuG6gBSsJRT0s9jmFwFJvpa2trWv233U2OYyMqu+VCd4W+XtAG/uvVeQ633DhU7hAosDntrqLd9racONAGm5P4zD83JgsQxMMhjkDoVWSKaO6pIgc5W6LFWUkEjdrWj5U7JTGBOZxSqFLmzw4nW9rapGwuADxO+vMYdSBvud1WMSsQACZibm5OW1tLAADfv1v1aVK4rHqvJHYSRRNh8RiUKMW1jjxBKq62YdOJRvud/E1nuXuEw8RTBYWQNHGS5Yte7N1lVtcDq0AI31jcIF1JOW1rEAHv4imzz30Gg9Z/zqqDGkMZzHdQQes8PCuhgDi5YDXXQ+elckQYElrWPVe/rFQyPwGgG77z20xlifEqLLECAL3ZvSk6iwuVXdoBuublqjiw+cXzAG/G+vboDTo8OrLmLEHXS193beoXl4DQDd1ntPWaLCJWkCAKl7/GY8T1AdQ6957KSMZybm2nVelihVluWINzwFiPOkkcAZVFrb24sfsHYPG/AsMngZIjnZedYeiraJfrcb2HzRbtNhY1OdPXUuGiLm1iQASbcBuv2akedSNCq6+l2E6Hvtr66LAXcBiyqAC3XqL7/Gp3xZk+DAW51zaggDgB29eunAUseCDAElrkDcABu3ADdUWJg5ph0SCQGBYEEq24jrGh1FWcSscdmMLngBc6jdVvBJZO9ifAaD7aoCcsNw7LX+00Vy5QFG5QB5DU+dY8XJWSR6DYFG9SVR8lb6v+ExVqdDVcVKhrEeriy0pqQNVcGng0i9MnvXUwU+9IZ1q6urqBHuWJmCIzncisx/VBP2V5bsqck3J1z5j2sVYnxr0TlS1sJOdwEZY/RXVv2Qa8qxEhjClWBGYEd41Fwe8+dbMW3mR5PYcIunPq2gQ9N2qdIZeo5G7n3ftAedPn3/5pXFM8Tx8bXHYd6+sVnoTyzTO7jaG+w86fVePLxMjj48kraD0swuARYm+46EbxRvk+6T4hBOheErzKlbxLE2rIBzdluTcWPyqHbUTOqyAfNbs7+43HjVjYOOOGSe7Zc8YCgLmbMG6LWYZctiwJvccNa68tT56tC9yt2BhYmQxGRAwb5MgOW24lwQday0spHQBuBpqLE/dWkZcQzQ4mcCaIWJDMHVUfQkqNFtv8BfdRPldsmCOJXMSqWaylGVLC1z0QvS3Adl+2oDMZ70ygSB0IsGsL3FxuII38KiQNIwUWzHdqFGmu8m1SOrZigOVeGa+7tsPsp0uGVQGDHMN4tpfsN7kd4FAxI5HiuNxNri/Vex07zVfKd+p139pqeKBn1JA0Op7BoLC513buNcWZLoGvm35b218BQAs+IDAAKqmwBIFr6W1+3rpuFcBgWAYD0lJIBHUSCCPA0pwbZc2gGtwSFbhrlJBI13jqNLLO0llJJ1AFz4DfuoAjle50Fl4D/wA1JDlsc4uDu1seN7dfCuF4iQwF9xHRbjftHClGFdhnAJUm1wCRf5Om7ThRYCKeTMdwUa5VF7KDwFySe861Yw8iJYtGrka2bNY33ZgrDTyqISALlsCddbA2v2213VHzTX3HXXUHUHUG54dtACSOSbk9ncOoDgOyp7oAAyjMB87rJF7G16f74yCwC5rZc2VSdRY2JF72O/yNU0Qk2A1/zU9VACyOSde7uHUBwFW1EeRQykNqSc3pA+jYW049d6R514Bbjccotp4WNVdSeJJ8STQBY98MAUU5VOjAaZxe/TO9h2HTsonsrYM0qtKkZaOIZpGNgqjtJ013AbzuF6qYWEkWyZrbyFzWvwvajuAx+ICcy2YYe+Yq11iEhGhPDMQptfqNKzC6BYxRBHScDsJvbsB0qxggHBaQkuxJYsLknruRVzEyxgXPM+HSJPUABc0Kjw7lWe1gtrk2+MbAW695t1KeqrNCOpaRVMoygALqd/Sy63I4akDS2g76tMar4BLKW6zYdy/39lTMa5leWabPa7JobrCq+suPl4fc4GpVNQA1Kpqk6UWTqakU1CtSpSLkSqakFRqKmRCdAL0FgldVsbPk+T6xXUCzLqer8rGHvOcHcyZD2iQhCPJjXksilRa50Fu+vVOWOPEOGLmJZbui5HZlU3O8lRfhXmu0cSJemIkisLFEZnHYSWAOpv5VvxMbxueH2NVy18vVANjrqfVXQS5Wud2491Nfeajaudoe0joSYnBGF+cyc5DJqwUX372A3EHiKK4HZOz50yx4pAW/JSEAg9Sh7H1HsNqoYPaEkegIKnerAMp8Du7xrSTyYaT8ZhVvxMblPUwYVtp4yytJHAxuwVVm6lJ2b5cv48Q8nJnFRxGGKRREbi0dw1mNz8I4vr2ddAZuSE+dXIJKEEXcPexvawUGokwOFGscmIhPzbH1qyn1VaTnF9Dakw7H50+rpCr1iqTOTPYWMjpZnbW2VI5UiBtL3LJGb7rdIZSOPnVDZmyebkczpmDCwsLldd2Xq7jw40VWfHfF2hA301iHnnQGpFxu0uHvSTuK/wADipqtRfNmeWy8bH4PFeZndpbNLFuZhyg+iLOuncwsPA2p8uyYRCpKgS5VB+Es2bTMSWOU8dO3Sj7Y7H/HwEb/AEecH2tULbalHpbOcd0lvK8dSz0v3FMsHilrTfcZzZezRJKVlziOxtlKnMd1iwuBUWO2Y0DMIi7rpboPfXgWAym3WK0j7fi+NhsQPFW+0VD+F8Ed8Mw7WhQ/xk1K8HpJFUqNaPvQa+gDxWxgsSSc8hk0LJfXXXhcgjtA+yodn4VpnKL8UdIgFt/AVo/wlgflsv8A0iPYDTTjcC35c+Uy/wANSyp80VNtapmZxmzxC5UkEDWxHSAO4EEWvax06/AWYdmvLFmzIqkXUM2th2AWG6j18EdBOni8n8QpyrhgLLiYgOrnE+00ZOzvFmMgI7Wz630FrOT3AGiMuyJ3QkgqAL2Ygbj8YsQF01ud1qMNszDNumiPccPVhsFmFvfBYHgWjIp5GGcxwhAF2Fh1mrXveV1v19ba+IvWgk2AjDcD4/y1bjwMoACkC2g6N/Xvo3ch50CdllEjVJCQwvcAgDfprfqtVfEMZ3ywKxVb5mJuC3Zrb18aJnk4Tvy67/xnH9apsJsFYxbnkjG86sB+09DjLoJNGd/B7pKpcAncF33vpuF+JoptzBTRiMPFkL5sgtYkqcp036G/C2h6jbR7IxGzsNIsjyvjJdyRRqjKTuscos+/0Sx+iah5SRSmZsRiWHOMMuHiX0YYty2A0AA0Ft5ueGmerU3aZvwOEliaqjy5v5AArlAX5It5b6YacabXMPdNJcEIKlUU1bVYglQHpKT42oBCxpV6DBseHnpTY9pqNBGB3b/OpF2oOqkWphDDbMX4xv2DSiUcSqLAAUDj2wo66m/D6fJNS4EJZmF711B/w+nyW9VdRdEcpu/dVcrs2WQb0eFu/wCFVSPJjXlGI2tEI4pUcl2DAqArC3FZBmBGttADfeCNL+1csdn++MFPBmC50sGa9gQykE27QK8X5ObPaOFxKi6yEFGs3oqt7jdbW3ga6VWeVXZ4PBUJVqqjF2eqYrFXAYAgEKbNYkEgX9d7dlR5bf8Akn21bYVGy1yG+J9FhSsl16lY0hNRSYuMG2daQYhDuZfOnll0K/SKV7ZlftQuIPRNNMw/Np5yj92QUszAqbEVATWzCxTTueZ2/VnGpDJK3Dl2k4nHybdzv/EWpOeXqf66f0qgq5sloRMhxDARC7NcMQ5VSUSy6kM2UHUdHNre1ad1B8jixx2JjpUl3jBPbVWZf1Q3sZanTaso3TyDwYeyQ0ZxeF2eGwxjdHjZ5ue+EZGyHM8KsGN0IUBS1t9r7xXJyXgkhSSPGxAlR0WFyWed0h5whvgCVMakEHVJDqKjuYdC5bUxa+NgtduYgflr/SaQ+1DS/hyU7zGf1UP78YqDbWyjh2VTIj5gSMhv0RZc31xKv/SJ4ih1LcQ/rLFtjFLmu5eQXG2DxiiPesP8LCubaKHfhoj3Ix/deg9Iaj6NH5ly25iOaT+gX984c78KvlMPbemNLguOHA/XK+1aFE0oc9Zo9H6NkvXTfvUovvCQXAn8mR3TL/JThgsEfiyeDqfsoXzh6z500m+8A+ApbiX7hra1B+9Qj4eQUbZGDPCXyU/xUw7Fwf8Azfqr/PQxrdVu4AH1UVha6g9nGqauen8R08BLCYy9qSVvkvIb+BcH/wA36q/z1JHsnBDhKfqj7TS11U72fU6XoOGWlOPcvIIYLGxQawYdFb5b/CN3gEBb94NVdo455naSRizsbsx3k7qgpjUrt6lqpwj7qsJTTTqaaYhKSlpKCDHLTqatLegaHUlITSFqLDuOrqZmpKLCzH0LtLB89DJDfLzkbpm+TmUgHwvfwrxiPEzOrGf8arNGw4gxnKwJ4kG4ub7q9vryrlcynESslsrlWuOPQUFvEgnxvxrfiuEDyWw43xDfy8jNE1nttbUvdFOnE9f9qs7e2hlHNqdT6XYOqsyWvvrPh6F/aZ1NsbUcVuKT7X+B4UnjReDYGKZQ6QtICL/BFJSO9YySO4iqez8NE1884i00LRuwJ6jkuR5Grq7FUi6YnCP2GUxH/fRK3HlCtNgJ42BeKaPUelGyjf8AOAolViDZm0FA5lpWHEQYjOtu6MkeumT4OVPTidB85GX2igCGt7yRwmJwuGTGRYR8Q2ImCkLC0uTCRN8JYAaNKx07IwawAcHcfI1d2htOSZ1kYhSkaRRhAVWOONQqKguSBpffvJNIDdbT5NxxbdgQxK2HxLNMsbL0NY3MiFT1OubLbQOotQXljsaN2wmKwUIEWOjTm41GiT6K0Ytot7qLDir9VP2fy5ZVwgmg558HI7xymWzsjq6GNgUOlmXW/wCTWoOSnLI4PCthzEJWVjJhXa1oJTGULZSN2pbQjVm69ABeXexcJhUwxw5JJOKixDkkiSXCmFHZQSQozM40sNB3kps/kLh5A+FM8q7RTDido7x8yGfVYSMpbMoaIMc35QEXGlB9lbXwoTAifO3vRsbM65S3PPI0T4dM1+Lx3Zjpob76m2by7KYoYuTBYYyFizvEJ43Ie4kOsxViQTYEWvbwAM9syCF2KzzPAuU2YQmUhrjosgZSNM3lurQbE5HwYyQx4XaSSOq5yr4WeKy3AuWJK7yNL0YxGxdm4na0hOMi97SxnEdCWNbylwJISxPQJJaS2jWawtYkE9tRbTUNhtlYSOHCg6SYeaBpZvnljJnUkdmf51AGMi5D4ppcVEHw6jCFeekkkMcYzKWBDFT8UEm4AFQjkdiWHwUmEm/+LGYdv3nWtZyAwskeG2vDLh2lmVEz4diS8haOc5TkOYlr7wbm+lZjH8xlYPsOaJrGzc/jFCkjRskqEEA62vQMzcsZVmVhZlZlYXBsykhhcaHUHUaU2kFLTENfdRPC+gP840Knayk9QJqpFteQC1xbuH3Vnr03O1jsbKx1LCuTnfj0NLXUATbb9Q8v71Ou12+SPWKzejTO6tt4R6tr6eQXppFD02sOK+Rq5h8Wj6A69R0NRlSnHVGmlj8NWdoTV+77j7V1PIpKgamhtqaRT6SmRaLcOyZmj51VQprf4aEMLbyY2cPbwoeW+j9b+1OkjuLA29dVhgZeDIfOtNPc29o4uLe0Yze6SceWn5HtI3Uv1j/LTDK/yV+sT9lPGAm609dOXZ0vGRB4f3q3/rGJ+t3y+xBzj9S+ulqb8HSfnU+r/elp3w39uLJtfo/9T6B22SMPKV3hG8ra+q9eaNgjKqi/S3E9lyB46G3DSvWGAIsRcHQjrB31gcNNhYGfDTtzcqSkrIbgFSq5CGGgBUKSraE9dqdeKck5aGbZ85bqUabtNNNdlmmeJbWSTnnEkZjcHVCCCvYQdfHjv41VjNj0luO249Yr6HnwnvlQizYfEqODpDiLdwQgL9Ws5tHkVGSb4RF7YppI28I3HNr5VJSRllha1+v1/rPNMM+BbQxYlDYapNFIL8bI8an9qrDYHB2/906dXP4dl9cfOXrR4vkUgFwuKj+lHHiP+yVodJsAxmyYqJSeEglgY9mXKw9dPMiiVKcfei19AbLsOJl+CmwjnTXnjF+zKw9lSxbJ2jGPgufI64Jiw/YNSy8msURYJHIODK+Hc+ALZvVQ7EcncSurYdxbi0UqD6wFqZWWMXtDaCDLK09v+dGJD5yAmg74p+J88y1dgx2KTSOaUW4RzkDyJqeTbeMPpszfTijk/aIvQMFDGt1nzB9opwx5/wAH3GrE20lY3eCAn6MsZ/YYCmNJh2/Isv0JxbykUn10xDRj+71j76euOHUPP76jeKDgZl70R/WGHsqJ8MnCZf1ldT6gR66ALgxingfUftppeM71Hiv9qqNgzwaM9zgfvWpPekg+KfAg+w0AFcNtAxnNHK0bWtdHaM26rqQbdlF8Lywx6ehj8T4zO/qckVkCrjeGHeDTDIf8tRYA/iZ2kdpHYs7szux3szG7E26yTUVBllPZ7PZThiD/AITQASxPonuNCQB21K2IJFjfz/tUdl7fVQBwVflHyq3DChGsyqeoq59ag1UCr8r1VMqj5Q9f3UwJ/ey8Jov90e2Oo3hIPpKe1Tf+9TDBqd2Ig8TIP3oxSnAHhJCe6VB7SKALWC2iR0X1HBuPj199FAaAjZ8nAKe6SM+xqtYNJ4/ybFeIFjbusazVcOnxid7Z+2HTtTru668129V4hUikrgewjsIIPkaWseh6hSjJXTuhBUimo6etJkouxJXUlLSLLiWrqWuphc9/rBe6jsm6piVG60cncT8G3mSvitb6osTAsiNG6hkYFWU7iDvFdapDPGx84wuIdCopo+e3hPVVvDbYxUVgk8ygcA7Zfq3tXrcvIjAH8gV+jLN7C5Hqofivc6w5/Fyyp2HK48rA+usbw01od1bXoy95d6/9MLBy2xi+kySDqeNB60Cn11fi5esRaTDI30HZR5Nmoji/c1nH4uaF/pB4z6g/toNi+QuNT/8AXzDrR0b1Zs3qqLhVRohjMLLRrvt5Fr/8h2c5u+FZSeISNv2gVPqqxBi9nXvHiHiY/OmW31gVFZPF7HmjvzkUsduLxuo82AFUzAajnki1ww9TXj22Z6GFEmi49ZfmymGYfV0NV5uTzW1gwj36oTh7/rRa1gDE3VToZnQ3VmU9akj2VJVpFUsBhpcl9vszUzcntNcGP+liXJ/37j1UMxHJyP42HxS9uWKb1RhfbVaLlDil3TyfrHP+9ercXK/Ej0ij/SQD9zLTVdlUtk0Xpf6PzQIxGwoBvdkP/MhkiH7LP7KqjYiH0cRGewSEf91FrWx8tG+PAh+izL7c1OblJhX/ABmGPkknty1PfoolsZcpvuv+THHk5KRpZu5on9SOSfKq02wJxqYiB1tHIntW1bgT7Mf4mT9Rk/7ZNSQ4XBb48QUP/wAhU/7oqSrxKZbHq/DJeK/DPORBINx+q/2Xpzc8OD+WavTvwezjoYsyd5SUeSkVVl2BINSID3wql/1gCamqsSmWysStEn2Nfmx5qZj8YDxQU3nl+QvhmH216C+xG4wRn6MsvsZgKqT7BU78PKO5oiP3SaaqR6lEsDiY6wfdf7GKLJ8kjub7xSWT548jWmxGw4vkyr/0WPrBUVRl2TD+dA+kGX2ZqlmRRKlUj70Wu1AfIvyj4qfsp6xjgynzH2Vf/A6n0ZVP638yiuXYr8Cp/WjPsepXK7lOPC5jYNGPpOF9ZqUbNc7jEe6aH+epX2NMPiMe5W9oFQS4CQb0I79PbQIkOyZvzd+5lb2E1G2zZRvhk+o33VD71bqHmPvp64dxuVvD+1AyWAyxG4RwOIKsAfV66NYfEhxceIO8d9As0o3GQd2b7KeuJmHxpPHMR5HfVVSkp9pvwW0amGdlxj08jQU9apw4g5QzKVvca9ltQDqV139hGtr1ZjcHcawzpyhqeuwuMpYiN4P6c0TiupA1IZF4sPMVA2ZktWOrqj98p8tfrCkp2Yt5Dqj6EzV2aurq7B81OzUorq6gDr0oFLXUgEZQQQdQRYjgQd4NeGe6NyebBz50a0U2qAWXKRwygAAbh27+NdXVGSuSi2tDI+/pB8bzAp42m3FVPmK6uqpwi+RoWIqx0kxfwqvFD4EH7qeu0Ij1jvH3V1dUHSiXR2hWjzJ48rbj7a4x9tdXVnlFI7NCvOcbsaUNJY11dULGhVZCE1LDjHX0XdfosR7K6uosWKbZbj25iB+Wc/SOb969WI+UuIG8q3egH7tq6uoLE2Tx8qX+NEh7iw9pNTLynQ+lCfBwfUVpK6i7JKpJczm2thG9KE+MaH7aaW2e3xVH6jr+6KSup5mhSkpe8k+1EseyMK+qZvBpB+9Ux2BbUSyqOxl+6urqmpy6jWEw89ace5ETbHfhO36wDfaKZ+CZPlRN3xD7zXV1NVZ9SL2VhJaw8WvyNOAkH5OA+AH8FQy4WXgkY7jb+Curqlvpoith4OXJr6v8lCbZ0xN7L9b+1RfgiXqTz/tS11NYqoP9PYP594o2M/VH5n+WlGxX+Z6/urq6j0qr1Jfp7Ar4X3sd+B3+Uvka6urqPSqvXwQ/UGA/Z/s/M//Z',
    price: '₹7,99,900',
    mileage: '18.4 km/l',
    fueltype: 'Petrol/Diesel',
    description: "The all-new Honda Amaze is a compact sedan that blends style, performance, and practicality, offering a refined driving experience with its 1.2L i-VTEC petrol engine. It features a new design, advanced safety technologies like ADAS, and a modern infotainment system, elevating the driving experience. The Amaze prioritizes fuel efficiency, spacious interiors, and a comfortable cabin, making it a well-rounded choice for Indian car buyers"
  },
  {
    name: 'All New Elevate',
    img: 'https://capitalhonda.in/uploads/common/20232308169277182864e5a5f4767f8.png',
    price: '₹11,91,000',
    mileage: '15.31 km/l',
    brochureUrl:'Honda Elevate Brochure_dated Feb 25.pdf',
    description: "The Honda Elevate is a compact SUV with a focus on comfort, space, quality, and safety, offering a 1.5-liter petrol engine and a choice between a manual or automatic transmission. It is known for its bold, masculine design, good fuel efficiency, and various safety features like Level 2 ADAS"
  },
  {
    name: 'City 5-Gen',
    img: 'https://capitalhonda.in/uploads/common/202307031678189043640721f346fd3.jpg',
    price: '₹12,08,100',
    mileage: '18.4 km/l',
    brochureUrl: 'Honda City Brochure dated Feb 25.pdf',
    description: "The Honda City 5th generation is known for its stylish exterior and well-designed interior. It features a sporty front grille, 3D LED tail lamps, and R16 diamond-cut alloy wheels. The interior is spacious and incorporates features like a dynamic view instrument panel and a cutting-edge technology suite"
  },  
  {
    name: 'Amaze-2nd Gen',
    img: 'https://res.cloudinary.com/djy15bn9n/image/upload/v1744371026/WhatsApp_Image_2025-04-11_at_5.00.12_PM_iu5xzd.jpg',
    price: '₹7,19,500',
    mileage: '18 km/l',
    description: 'The Honda Amaze 2nd generation is a subcompact sedan known for its fuel efficiency and comfortable ride. It features a 1.2-liter petrol engine with manual or automatic CVT transmission options. The car is equipped with safety features like ABS, EBD, and airbags. It also offers a range of convenience features such as an 8-inch touchscreen, Android Auto/Apple CarPlay, and a wireless charger. ',
    brochureUrl: 'Honda Amaze Reinforced Safety Brochure April 2024_new12.pdf'
  },
  {
    name: 'City eHEV',
    img: 'https://capitalhonda.in/uploads/common/202307031678188777640720e9d61b4.jpg',
    price: '₹20,55,100',
    mileage: '27 km/l',
    brochureUrl: 'Honda City Brochure dated Feb 25.pdf',
    description: 'The Honda City e:HEV is a hybrid electric vehicle (HEV) that combines a 1.5-liter Atkinson-cycle petrol engine with a dual electric motor system, offering a strong hybrid electric powertrain. The vehicle boasts a claimed fuel efficiency of 26.5 kmpl and is equipped with features like regenerative braking, idle start/stop, and a suite of safety technologies'
  }
];

const Page = () => {
  const activeCategory = 'service';
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[300px] bg-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578659258511-4a4e7dee7344?w=600&auto=format&fit=crop&q=60"
            alt="Honda vehicles lineup"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {getCategoryTitle(activeCategory)}
              </h1>
              <p className="text-lg text-white">
                {getCategoryDescription(activeCategory)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Honda Vehicles */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">All Honda Vehicles</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {vehicles.map((vehicle, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <img src={vehicle.img} alt={vehicle.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{vehicle.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{vehicle.description}</p>
            <p className="text-sm text-gray-800"><strong>Price:</strong> {vehicle.price}</p>
            <p className="text-sm text-gray-800 mb-4"><strong>Mileage:</strong> {vehicle.mileage}</p>
          </div>
          <div className="flex justify-end gap-4">
          <Link href="/book-test-drive">
  <button className="mt-auto px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-200">
    Book Test Drive
  </button>
</Link>

            <a
              href={vehicle.brochureUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-200 cursor-pointer"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Page;
