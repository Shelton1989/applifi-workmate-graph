"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
let FindUniqueFeaturesArgs = class FindUniqueFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], FindUniqueFeaturesArgs.prototype, "where", void 0);
FindUniqueFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFeaturesArgs);
exports.FindUniqueFeaturesArgs = FindUniqueFeaturesArgs;
