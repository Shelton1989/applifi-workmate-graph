"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateInput_1 = require("../../../inputs/FeaturesCreateInput");
const FeaturesUpdateInput_1 = require("../../../inputs/FeaturesUpdateInput");
const FeaturesWhereUniqueInput_1 = require("../../../inputs/FeaturesWhereUniqueInput");
let UpsertFeaturesArgs = class UpsertFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesWhereUniqueInput_1.FeaturesWhereUniqueInput)
], UpsertFeaturesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateInput_1.FeaturesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateInput_1.FeaturesCreateInput)
], UpsertFeaturesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesUpdateInput_1.FeaturesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesUpdateInput_1.FeaturesUpdateInput)
], UpsertFeaturesArgs.prototype, "update", void 0);
UpsertFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertFeaturesArgs);
exports.UpsertFeaturesArgs = UpsertFeaturesArgs;
