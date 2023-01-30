"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateInput_1 = require("../../../inputs/FeaturesCreateInput");
let CreateFeaturesArgs = class CreateFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCreateInput_1.FeaturesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FeaturesCreateInput_1.FeaturesCreateInput)
], CreateFeaturesArgs.prototype, "data", void 0);
CreateFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateFeaturesArgs);
exports.CreateFeaturesArgs = CreateFeaturesArgs;
