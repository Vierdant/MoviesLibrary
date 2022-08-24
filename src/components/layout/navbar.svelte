
<span class="logo">logo</span>
<div class="left">
    

    <div class="category">
        <span>
            Movies
            <div class="subcategory">
                ^
            </div>
        </span>
    </div>
    <div class="category">
        <span>
            TV-Shows
            <div class="subcategory">
                ^
            </div>
        </span>
    </div>
</div>


<div class="right">
    <div class="profile">
        <p>P</p>
    </div>

    <div class="search">
        <input type="text" placeholder="Search">
        <button>O</button>
    </div>
</div>

<style lang="scss">
    .topnav {
        overflow: hidden;
        background-color: #333;

        .left {
            display: inline-flex;
            flex-direction: row;
            position: absolute;
            left: 0;
            top: 0;
            gap: 2rem;

            .logo {
                background: green;
                padding: 0 5rem;
                margin-top: 0.9rem;
            }
            
            .category {
                background-color: red;
                margin-top: 0.9rem;
                
                span {
                    font-size: 1.2rem;
                }

                .subcategory {
                    display: inline-flex;
                    margin-left: 0.5rem;
                    font-size: 1rem;
                }
            }
        }

        .right {
            display: inline-flex;
            flex-direction: row-reverse;
            position: absolute;
            right: 0;
            margin-right: 2rem;

            .profile {
                background-color: red;
                padding: 0px 20px;
            }

            .search {
                background-color: blue;
                margin-right: 1rem;

                input {
                    margin-top: 0.9rem;
                    margin-left: 0.5rem;
                }

                button {
                    position: relative;
                    right: 0.5rem;
                }
            }
        }
    }
</style>