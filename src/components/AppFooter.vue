<script>

</script>

<template>
    <div class="appfooter-container">
        <img src="../assets/img/Logo-oro-modificato.png" alt="logo-footer">
        <div id="info-container">
            <div id="about-container">
                <h2>About COUPICKR</h2>
                <p>COUPICKR è la tua destinazione per gli sconti online. La nostra missione è semplice: raccogliere gli
                    sconti dai migliori negozi online e mettere in contatto acquirenti e venditori. Stimoliamo l'entusiasmo
                    degli acquirenti, offrendo incredibili opportunità di risparmio.</p>
            </div>
            <div id="links-container">
                <div id="left-links">
                    <h2>Our Links</h2>
                    <a href="#"><span>FAQ</span></a>
                    <a href="#"><span>Our Company</span></a>
                    <a href="#"><span>Contact</span></a>
                </div>
                <div id="right-links">
                    <div id="social-icons-container">
                        <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                    <a href="#"><span>Terms of Use</span></a>
                    <a href="#"><span>Privacy policy</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.appfooter-container {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-bottom: 100px;

    img {
        height: 40px;
        margin: 50px 0 80px;
    }

    #info-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 150px;

        #about-container {
            width: 30%;

            h2 {
                margin: 0 0 30px;
                font-size: 30px;
            }

        }

        #links-container {
            width: 30%;
            display: flex;
            justify-content: space-between;

            #left-links {
                display: flex;
                flex-direction: column;

                h2 {
                    margin: 0 0 30px;
                    font-size: 30px;
                }

                a {
                    margin-bottom: 20px;
                    color: white;
                    text-decoration: none;
                }
            }

            #right-links {
                display: flex;
                flex-direction: column;
                align-items: end;

                #social-icons-container {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 35px;

                    .social-icon {
                        background-color: white;
                        padding: 12px;
                        border-radius: 10px;
                        color: black;
                        font-size: 20px;
                    }
                }

                a {
                    margin-bottom: 20px;
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>