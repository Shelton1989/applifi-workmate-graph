"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesUpdateManyMutationInput_1 = require("../../../inputs/FeaturesUpdateManyMutationInput");
const FeaturesWhereInput_1 = require("../../../inputs/FeaturesWhereInput");
let UpdateManyFeaturesArgs = class UpdateManyFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateManyMutationInput_1.FeaturesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateManyMutationInput_1.FeaturesUpdateManyMutationInput)
], UpdateManyFeaturesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], UpdateManyFeaturesArgs.prototype, "where", void 0);
UpdateManyFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFeaturesArgs);
exports.UpdateManyFeaturesArgs = UpdateManyFeaturesArgs;
