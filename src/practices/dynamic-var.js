class Features {
    constructor(disable_features) {
        this.disable_features = disable_features
    }

    feature_one() {

        console.log(
            this.disable_features.includes(this.feature_one.name) ? "No feature available" : this.feature_one.name + " feature available"
        )
    }

    feature_two() {
        console.log(
           this.disable_features.includes(this.feature_two.name) ? "No feature available" : this.feature_two.name + " feature available"
        )
    }

    feature_three() {
        console.log(
           this.disable_features.includes(this.feature_three.name) ? "No feature available" : this.feature_three.name + " feature available"
        )
    }

    feature_four() {
        console.log(
            this.disable_features.includes(this.feature_four.name) ? "No feature available" : this.feature_four.name + " feature available"
        )
    }
}

function test_function(...rest) {
    console.log()
}

console.log(test_function.length)

const feature = new Features([
    "feature_two"
])

feature.feature_two()
feature.feature_one()