"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateColorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateInput_1 = require("../../../inputs/ColorCreateInput");
let CreateColorArgs = class CreateColorArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateInput_1.ColorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateInput_1.ColorCreateInput)
], CreateColorArgs.prototype, "data", void 0);
CreateColorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateColorArgs);
exports.CreateColorArgs = CreateColorArgs;
