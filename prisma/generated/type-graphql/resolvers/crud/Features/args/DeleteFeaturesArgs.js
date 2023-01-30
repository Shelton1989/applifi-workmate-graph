"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
let DeleteFeaturesArgs = class DeleteFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], DeleteFeaturesArgs.prototype, "where", void 0);
DeleteFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteFeaturesArgs);
exports.DeleteFeaturesArgs = DeleteFeaturesArgs;
