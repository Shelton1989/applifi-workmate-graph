"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WardCreateInput_1 = require("../../../inputs/WardCreateInput");
let CreateWardArgs = class CreateWardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateInput_1.WardCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WardCreateInput_1.WardCreateInput)
], CreateWardArgs.prototype, "data", void 0);
CreateWardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateWardArgs);
exports.CreateWardArgs = CreateWardArgs;
