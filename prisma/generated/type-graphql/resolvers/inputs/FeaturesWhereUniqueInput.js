"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FeaturesWhereUniqueInput = class FeaturesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesWhereUniqueInput.prototype, "id", void 0);
FeaturesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesWhereUniqueInput", {
        isAbstract: true
    })
], FeaturesWhereUniqueInput);
exports.FeaturesWhereUniqueInput = FeaturesWhereUniqueInput;
