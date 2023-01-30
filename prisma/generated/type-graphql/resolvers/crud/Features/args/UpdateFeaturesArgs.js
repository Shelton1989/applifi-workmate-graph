"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesUpdateInput_1 = require("../../../inputs/FeaturesUpdateInput");
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
let UpdateFeaturesArgs = class UpdateFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateInput_1.FeaturesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateInput_1.FeaturesUpdateInput)
], UpdateFeaturesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], UpdateFeaturesArgs.prototype, "where", void 0);
UpdateFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateFeaturesArgs);
exports.UpdateFeaturesArgs = UpdateFeaturesArgs;
