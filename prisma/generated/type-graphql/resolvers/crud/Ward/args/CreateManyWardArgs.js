"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateManyInput_1 = require("../../../inputs/WardCreateManyInput");
let CreateManyWardArgs = class CreateManyWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WardCreateManyInput_1.WardCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWardArgs.prototype, "data", void 0);
CreateManyWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWardArgs);
exports.CreateManyWardArgs = CreateManyWardArgs;
