"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFeaturesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCreateManyInput_1 = require("../../../inputs/FeaturesCreateManyInput");
let CreateManyFeaturesArgs = class CreateManyFeaturesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FeaturesCreateManyInput_1.FeaturesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyFeaturesArgs.prototype, "data", void 0);
CreateManyFeaturesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyFeaturesArgs);
exports.CreateManyFeaturesArgs = CreateManyFeaturesArgs;
