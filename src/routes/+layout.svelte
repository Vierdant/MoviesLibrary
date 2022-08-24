<script lang="ts">
    import logoImg from "../assets/logo.png"
    import logoWebImg from "../assets/logo.webp"
    import defaultProfImg from "../assets/default-profile.png"
    import defaultWebProfImg from "../assets/default-profile.webp"
</script>

<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>

<div class="topbar">
    <picture>
        <source srcset={logoWebImg} type="image/webp">
        <source srcset={logoImg} type="image/png">
        <img src={logoImg} alt="logos" height=50 width=200>
    </picture>
    
    <div class="navbar">
        <div class="navbox">
            <a class="navtext" href="/movies">Movies</a>
            <button><span class="material-symbols-sharp navtext">
                arrow_drop_down
                </span></button>
        </div>
        <div class="navbox">
            <a class="navtext" href="/tvshows">TV Shows</a>
            <button><span class="material-symbols-sharp navtext">
                arrow_drop_down
                </span></button>
        </div>
        <div class="navbox">
            <a class="navtext" href="/actors">Actors</a>
            <button><span class="material-symbols-sharp navtext">
                arrow_drop_down
                </span></button>
        </div>
    </div>

    <div class="rightbar">
        <div class="profile">
            <picture>
                <source srcset={defaultProfImg} type="image/webp">
                <source srcset={defaultWebProfImg} type="image/png">
                <img src={defaultProfImg} alt="logos" height=40 width=40>
            </picture>
            <button><span class="material-symbols-sharp navtext">
                arrow_drop_down
                </span></button>
        </div>
    </div>
</div>

<main>
    <slot></slot>
</main>

<style lang="scss">

    :global(:root) {
        --background-color: #1c2e4a;
        --secondary-background-color: #152238;
        --text-color: #f1f0f0;
    }

    :global(body) {
        color: var(--text-color);
        background-color: var(--background-color);
        margin: 0;
        max-width: 99.51%;
        font-family: Arial, Helvetica, sans-serif;
    }

    :global(.material-symbols-sharp) {
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
    }

    main {
        padding: 1rem 3rem;
        max-width: 90%;
    }

    .topbar {
        background-color: var(--secondary-background-color);
        top: 0;
        padding: 0.3rem 0.2rem;
        position: relative;
        display: inline-flex;
        flex-direction: row;
        width: 100%;

        .navbar {
            margin-left: 1rem;
            text-align: center;
            overflow: hidden;
            display: inline-flex;
            flex-direction: row;
            gap: 0.6rem;

            .navbox {
                span {
                    margin-right: -0.1rem;
                    margin-left: -0.3rem;
                }

                a {
                    margin-left: 0.5rem;
                }

                button {
                    background: none;
                    border: none;

                    &:hover {
                        color: white;
                    }
                }
            }
        }
    }

    .navtext {
        float: left;
        color: #f2f2f2;
        text-decoration: none;
        font-size: 18px;
        padding: 1rem 0rem;
        margin-right: 0.5rem;
    }

    .rightbar {
        display: inline-flex;
        flex-direction: row-reverse;
        right: 2rem;
        position: absolute;

        .profile {
            img {
                border-radius: 50%;
                margin-bottom: 6px;
            }

            button {
                background: none;
                border: none;

                &:hover {
                    color: white;
                }
            }
        }
    }

    

    /* blue shaeds
    #23395d
    #203354
    #1c2e4a
    #192841
    #152238
    */

</style>