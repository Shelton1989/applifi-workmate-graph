"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesWhereInput_1 = require("../../../inputs/FeaturesWhereInput");
let DeleteManyFeaturesArgs = class DeleteManyFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], DeleteManyFeaturesArgs.prototype, "where", void 0);
DeleteManyFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFeaturesArgs);
exports.DeleteManyFeaturesArgs = DeleteManyFeaturesArgs;
